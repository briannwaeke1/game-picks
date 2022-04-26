import { Auth } from '@supabase/ui';
import Navbar from '~/Components/Navbar/Navbar';
import { supabase } from '../lib/client';
import GamesListItem from '../Components/Games/GamesListItem';

// Create a single supabase client for interacting with your database

const Container = props => {
	const { user } = Auth.useUser();
	if (user)
		return (
			<>
				<nav>
					<Navbar />
				</nav>
				<main>
					<div>
						<GamesListItem />
					</div>
				</main>
			</>
		);
	return props.children;
};

export default function Home() {
	return (
		<Container supabaseClient={supabase}>
			<Auth providers={['facebook', 'github']} supabaseClient={supabase} />
		</Container>
	);
}
