import Nav from '../Components/Nav';
import { useAuth, VIEWS } from '../lib/auth';
import { Auth, Button, Typography } from '@supabase/ui';
import { supabase } from '../lib/client';
import Link from 'next/link';

export default function Home() {
	const { user, view, signOut } = useAuth();

	if (view === VIEWS.UPDATE_PASSWORD) {
		return (
			<div className='flex flex-col items-center justify-center min-h-screen py-2'>
				<main className='flex flex-col items-center justify-center flex-1 w-full px-8 text-center sm:px-20'>
					<div className='inline-flex flex-col w-full max-w-sm mt-8 space-y-8'>
						<Auth.UpdatePassword supabaseClient={supabase} />
					</div>
				</main>
			</div>
		);
	}

	return (
		<>
			<div className='sticky top-0'>
				<Nav />
			</div>
			{user && (
				<>
					<div className='flex flex-col items-center justify-center min-h-screen py-2'>
						<main className='flex flex-col items-center justify-center flex-1 w-full px-8 text-center sm:px-20'>
							<div className='inline-flex flex-col w-full max-w-sm mt-8 space-y-8'>
								<Typography.Text>Signed in: {user.email}</Typography.Text>
								<code className='highlight'>{user.role}</code>

								<Link href='/profile'>
									<Button block>Go to Profile</Button>
								</Link>

								<Button block onClick={signOut}>
									Sign Out
								</Button>
							</div>
						</main>
					</div>
				</>
			)}
			{!user && <Auth view={view} supabaseClient={supabase} />}
		</>
	);
}
