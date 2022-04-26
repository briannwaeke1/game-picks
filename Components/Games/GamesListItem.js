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
		<div className='relative flex flex-col'>
			<ul>
				{data
					? data.map(item => {
							return (
								<div className='max-w-screen-lg h-48 m-4 p-6 bg-white rounded shadow-lg ring-2 ring-blue-700/50 lg:max-w-md cursor-pointer hover:shadow-xl hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200'>
									<li key={item.GameID}>
										<section className='card-header'>
											<h1 className='text-md font-sans font-semibold text-center'>
												{item.Name}
											</h1>
										</section>
									</li>
								</div>
							);
					  })
					: null}
			</ul>
		</div>
	);
};

export default GamesListItem;
