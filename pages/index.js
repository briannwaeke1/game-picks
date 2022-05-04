import React, { useState, useEffect } from 'react';

import GamesListHeader from '~/components/games/games-list-header';
import MatchupCard from '~/components/games/matchup-card';

const HomePage = props => {
	const [games, setGames] = useState([{}]);

	useEffect(() => {
		fetch(
			'https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/current?key=ce1cea60fa674f5ebb95719e856f2b47'
		)
			.then(res => res.json())
			.then(data => setGames(data));
	}, []);

	const gamesList = games.map(game => (
		<MatchupCard key={game.GameID} game={game} />
	));

	return (
		<div className='main'>
			<GamesListHeader />

			{gamesList}
		</div>
	);
};

export default HomePage;
