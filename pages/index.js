import GamesListHeader from '~/components/games/games-list-header';
import GamesListItem from '~/components/games/games-list-item';

const HomePage = () => {
	return (
		<div className='main'>
			<GamesListHeader />
			<GamesListItem />
		</div>
	);
};

export default HomePage;
