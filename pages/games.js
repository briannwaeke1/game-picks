import React, { useState, useEffect } from 'react';

import Nav from '../Components/Nav';
import toast, { Toaster } from 'react-hot-toast';

export default function Games() {
	const [matchups, setMatchups] = useState([]);
	const [pick, setPick] = useState(null);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': 'odds.p.rapidapi.com',
				'X-RapidAPI-Key': '41543edc69msh003807b323e3bbep105e27jsn879fc87bea11'
			}
		};

		fetch(
			'https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=h2h%2Cspreads&dateFormat=iso',
			options
		)
			.then(response => response.json())
			.then(matchups => setMatchups(matchups))
			.catch(err => console.error(err));
	}, []);

	async function handlePick(event) {
		setPick(event.target.name);
		const notify = () => toast.success(`You picked ${event.target.name}`);
		notify();
	}

	return (
		<>
			<Nav />
			<h2 className='text-center'>Upcoming Games</h2>

			{matchups.map(game => (
				<div className='grid'>
					<div key={game.id}>
						<div className='rounded-lg border shadow-xl p-10 max-w-2xl'>
							<h4 className='pt-4 text-xl font-black text-black'>
								{game.away_team} @ {game.home_team}
							</h4>
							<p className=' max-w-2xl text-sm text-gray-500 pb-8'>
								{new Date(`${game.commence_time}`).toLocaleDateString('en-us', {
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								})}{' '}
								@{' '}
								{new Date(`${game.commence_time}`).toLocaleTimeString('en', {
									timeStyle: 'short',
									hour12: true
								})}
							</p>

							<div>
								<table className='table-fixed w-full text-sm text-left'>
									<thead className='text-xs text-black uppercase'>
										<tr>
											<th>Matchup</th>
											<th className='text-center'>Moneyline</th>
											<th className='text-center'>Spread</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th className='py-2 semi-bold'>
												{game.bookmakers[1].markets[0].outcomes[1].name}
											</th>
											<td className='py-2 text-center place-items-center'>
												<button
													onClick={handlePick}
													name={`${game.bookmakers[1].markets[0].outcomes[1].name} (${game.bookmakers[1].markets[0].outcomes[1].price})`}
													type='button'
													className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black'
												>
													{game.bookmakers[1].markets[0].outcomes[1].price}
												</button>
											</td>
											<td className='py-2 place-items-center text-center'>
												<button
													onClick={handlePick}
													name={`${game.bookmakers[1].markets[0].outcomes[1].name} (${game.bookmakers[1].markets[1].outcomes[1].point})`}
													type='button'
													className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black'
												>
													{game.bookmakers[1].markets[1].outcomes[1].point}
												</button>
											</td>
										</tr>
										<tr>
											<th className='py-2 semi-bold'>
												{game.bookmakers[1].markets[0].outcomes[0].name}
											</th>
											<td className='place-items-center text-center'>
												<button
													onClick={handlePick}
													name={`${game.bookmakers[1].markets[0].outcomes[0].name} (${game.bookmakers[1].markets[0].outcomes[0].price})`}
													type='button'
													className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black'
												>
													{game.bookmakers[1].markets[0].outcomes[0].price}
												</button>
											</td>
											<td className='place-items-center text-center'>
												<button
													onClick={handlePick}
													name={`${game.bookmakers[1].markets[0].outcomes[0].name} (${game.bookmakers[0].markets[1].outcomes[0].point})`}
													type='button'
													className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black'
												>
													{game.bookmakers[0].markets[1].outcomes[0].point}
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			))}

			<Toaster />
		</>
	);
}
