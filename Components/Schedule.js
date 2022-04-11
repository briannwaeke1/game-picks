import React, { useState, useEffect } from 'react';
import Game from './Game';

const Schedule = ({ changeUserPick }) => {
	const [schedule, setSchedule] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/Today?key=ce1cea60fa674f5ebb95719e856f2b47'
		)
			.then(response => response.json())
			.then(games => setSchedule(games));
	}, []);

	return (
		<div>
			{schedule.map(game => (
				<Game
					key={game.GameID}
					game={game}
					userpick={changeUserPick}
					status={game.Status}
				/>
			))}
		</div>
	);
};

export default Schedule;
