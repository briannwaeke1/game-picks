import { createContext, useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { supabase } from '../lib/client';
import { fetchUserRoles } from '../lib/store';

export const EVENTS = {
	PASSWORD_RECOVERY: 'PASSWORD_RECOVERY',
	SIGNED_OUT: 'SIGNED_OUT',
	USER_UPDATED: 'USER_UPDATED'
};

export const VIEWS = {
	SIGN_IN: 'sign_in',
	SIGN_UP: 'sign_up',
	FORGOTTEN_PASSWORD: 'forgotten_password',
	MAGIC_LINK: 'magic_link',
	UPDATE_PASSWORD: 'update_password'
};

export const AuthContext = createContext();

export const AuthProvider = ({ supabase, ...props }) => {
	const [session, setSession] = useState(null);
	const [user, setUser] = useState(null);
	const [view, setView] = useState(VIEWS.SIGN_IN);
	const [userRoles, setUserRoles] = useState([]);
	const [userLoaded, setUserLoaded] = useState(false);

	useEffect(() => {
		const activeSession = supabase.auth.session();
		setSession(activeSession);
		setUser(activeSession?.user ?? null);
		if (user) {
			signIn();
			Router.push('/channels/[id]', '/channels/1');
		}

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, currentSession) => {
				setSession(currentSession);
				setUser(currentSession?.user ?? null);
				setUserLoaded(!!currentUser);
				if (currentUser) {
					signIn(currentUser.id, currentUser.email);
					Router.push('/channels/[id]', '/channels/1');
				}

				switch (event) {
					case EVENTS.PASSWORD_RECOVERY:
						setView(VIEWS.UPDATE_PASSWORD);
						break;
					case EVENTS.SIGNED_OUT:
					case EVENTS.USER_UPDATED:
						setView(VIEWS.SIGN_IN);
						break;
					default:
				}

				// This is needed to set the cookie for SSR
				fetch('/api/auth', {
					method: 'POST',
					headers: new Headers({ 'Content-Type': 'application/json' }),
					credentials: 'same-origin',
					body: JSON.stringify({ event, session: currentSession })
				}).then(res => res.json());
			}
		);

		return () => {
			authListener?.unsubscribe();
		};
	}, []);

	const signIn = async () => {
		await fetchUserRoles(userRoles =>
			setUserRoles(userRoles.map(userRole => userRole.role))
		);
	};

	const signOut = async () => {
		const result = await supabase.auth.signOut();
		Router.push('/');
	};

	return (
		<AuthContext.Provider
			value={{
				session,
				user,
				view,
				signOut
			}}
			{...props}
		/>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
