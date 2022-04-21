import Layout from '../Components/Layout';
import { useAuth, VIEWS } from '../lib/auth';
import { Auth, Button, Typography } from '@supabase/ui';
import { supabase } from '../lib/client';
import Link from 'next/link';

export default function Home() {
	const { user, view, signOut } = useAuth();

	if (view === VIEWS.UPDATE_PASSWORD) {
		return (
			<Layout>
				<Auth.UpdatePassword supabaseClient={supabase} />
			</Layout>
		);
	}

	return (
		<Layout>
			{user && (
				<>
					<Typography.Text>Signed in: {user.email}</Typography.Text>
					<code className='highlight'>{user.role}</code>

					<Link href='/profile'>
						<Button block>Go to Profile</Button>
					</Link>

					<Button block onClick={signOut}>
						Sign Out
					</Button>
				</>
			)}
			{!user && <Auth view={view} supabaseClient={supabase} />}
		</Layout>
	);
}
