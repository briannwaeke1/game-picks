import Nav from '../Components/Nav';
import { useAuth, VIEWS } from '../lib/auth';
import { Auth } from '@supabase/ui';
import { supabase } from '../lib/client';

export default function Home() {
	const { user, view } = useAuth();

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
				<div className='flex items-center justify-center min-h-screen'>
					<h2 className='text-black text-3xl'>
						Welcome To <span className='text-green-400'>Game</span>
						Picks
					</h2>
				</div>
			)}
			{!user && (
				<div className='flex flex-col items-center justify-center min-h-screen py-2'>
					<div className='inline-flex flex-col w-full max-w-sm mt-8 space-y-8'>
						<Auth view={view} supabaseClient={supabase} />
					</div>
				</div>
			)}
		</>
	);
}
