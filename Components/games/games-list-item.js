import React, { useState, useEffect } from 'react';

const GamesListItem = () => {
	const [games, setGames] = useState([{}]);
	useEffect(() => {
		fetch(
			'https://api.sportsdata.io/v3/nba/odds/json/BettingEventsByDate/current?key=ce1cea60fa674f5ebb95719e856f2b47'
		)
			.then(res => res.json())
			.then(data => setGames(data));
	}, []);

	return games.map((game, index) => (
		<div key={index} className='container mx-auto my-5 w-1/2 h-full'>
			<div className='w-full bg-white flex flex-col xl:flex-row items-start justify-between px-10 py-10 shadow-xl rounded'>
				<div className='my-4 w-full'>
					<h2 className='text-black text-lg font-bold'>{game.Name}</h2>
					<div className='container mx-auto my-auto grid py-6'>
						<h2 className='font-normal text-lg text-black -mt-3 pt-6'>
							{game.AwayTeam}
						</h2>
						<h2 className='font-normal text-lg text-black  mt-3 pt-12'>
							{game.HomeTeam}
						</h2>
					</div>
				</div>
				<div className='container mx-auto grid my-auto py-6'>
					<div className='flex flex-row-2 space-x-4'>
						<div className='container grid '>
							<button
								aria-label='Home Team ML'
								role='button'
								className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
							>
								{game.AwayTeam} ML
							</button>
							<button
								aria-label='Away Team ML'
								role='button'
								className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
							>
								{game.HomeTeam} ML
							</button>
						</div>
						<div className='container grid'>
							<button
								aria-label='Home Team Spread'
								role='button'
								className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
							>
								{game.AwayTeam} +3
							</button>
							<button
								aria-label='Away Team Spread'
								role='button'
								className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'
							>
								{game.HomeTeam} -3
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	));
};

export default GamesListItem;
