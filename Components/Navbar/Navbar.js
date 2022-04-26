import React from 'react';
import Link from 'next/link';
import NavbarItem from './NavbarItem';
import NavbarSection from './NavbarSection';
import { Auth, Typography } from '@supabase/ui';
import { supabase } from '../../lib/client';

const Navbar = ({ children }) => {
	const { user } = Auth.useUser();
	const { Text } = Typography;
	return (
		<nav className='w-auto py-8 px-5 pb-2 sm:pb-8 shadow-lg flex flex-col sm:flex-row justify-between items-center'>
			<NavbarSection>
				<div className='pr-4 text-base'>
					<Link href='/'>
						<a className='self-center font-bold text-green-400'>
							Game<span className='text-black'>Picks</span>
						</a>
					</Link>
				</div>
				<NavbarItem text='My Account' url='/myaccount' active={false} />
				<NavbarItem text='Leaderboard' url='/leaderboard' active={false} />
			</NavbarSection>
			<NavbarSection>
				<div className='pr-16 text-base'>
					<Text>Signed in: {user.email}</Text>
				</div>
				<div className='self-center'>
					<button className='text-base' onClick={() => supabase.auth.signOut()}>
						Sign out
					</button>
				</div>
			</NavbarSection>
		</nav>
	);
};

export default Navbar;
