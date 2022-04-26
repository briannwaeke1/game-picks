import React from 'react';
import useSWR from 'swr';

import TeamLogo from '../TeamLogo';

const GamesListItem = () => {
	const fetcher = url => fetch(url).then(res => res.json());

	const { data, error } = useSWR(
		'https://api.sportsdata.io/v3/nba/odds/json/BettingEventsByDate/today?key=ce1cea60fa674f5ebb95719e856f2b47',
		fetcher
	);
	if (error) {
		return <p>Failed to load Data</p>;
	}
	if (!data) {
		return <p>Loading....</p>;
	}

	return (
		<>
			<ul>
				{data
					? data.map(item => {
							return (
								<div className='card'>
									<li key={item.GameID}>
										<div className='text-center'>{item.Name}</div>
									</li>
								</div>
							);
					  })
					: null}
			</ul>
		</>
	);
};

export default GamesListItem;
