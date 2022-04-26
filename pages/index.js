import { Auth } from '@supabase/ui';
import Navbar from '../Components/Navbar/Navbar';
import GamesListItem from '../Components/Games/GamesListItem';
import { supabase } from '../lib/client';

// Create a single supabase client for interacting with your database

const Container = props => {
	const { user } = Auth.useUser();
	if (user)
		return (
			<>
				<Navbar />
				<main>
					<GamesListItem />
				</main>
			</>
		);
	return props.children;
};

export default function Home() {
	return (
		<Auth.UserContextProvider supabaseClient={supabase}>
			<Container supabaseClient={supabase}>
				<div className='relative flex flex-col justify-center min-h-screen overflow-hidden'>
					<div className='w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-blue-800/50 lg:max-w-md'>
						<h1 className='text-3xl font-semibold text-center text-blue-500'>
							Game<span className='text-black'>Picks</span>
						</h1>
						<div className='mt-6'>
							<Auth
								providers={['facebook', 'github']}
								supabaseClient={supabase}
							/>
						</div>
					</div>
				</div>
			</Container>
		</Auth.UserContextProvider>
	);
}
