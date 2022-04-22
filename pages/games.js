import React, { useState } from 'react';
import Nav from '../Components/Nav';
import toast, { Toaster } from 'react-hot-toast';
import useSWR from 'swr';

export default function Games() {
	const [matchups, setMatchups] = useState([]);
	const [pick, setPick] = useState(null);
	const [parlay, setParlay] = useState([]);
	const fetcher = url => fetch(url).then(res => res.json());

	const { data, error } = useSWR(
		'https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/today?key=ce1cea60fa674f5ebb95719e856f2b47',
		fetcher
	);

	if (error) return 'An error has occurred.';
	if (!data) return 'Loading...';

	async function handlePick(event) {
		setPick(event.target.name);
		const notify = () => toast.success(`You picked ${event.target.name}`);
		notify();
	}

	return (
		<>
			<div className='sticky top-0'>
				<Nav />
			</div>
			<div className='inline-flex flex-col w-full mt-8 space-y-6 items-center'>
				<h2 className='text-center'>Scheduled Games</h2>
				{data
					? data.map(game => {
							return (
								<div>
									<div key={game.GameID}>
										<div className='rounded-lg border shadow-xl p-10 max-w-2xl'>
											<h4 className='pt-2 text-xl font-black text-black'>
												{game.AwayTeam} @ {game.HomeTeam}
											</h4>
											<p className=' max-w-2xl text-sm text-gray-500 pb-8'>
												{new Date(`${game.DateTime}`).toLocaleDateString(
													'en-us',
													{
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													}
												)}{' '}
												@{' '}
												{new Date(`${game.DateTime}`).toLocaleTimeString('en', {
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
																{game.AwayTeam}
															</th>
															<td className='py-2 text-center place-items-center'>
																<button
																	onClick={handlePick}
																	name={`${game.AwayTeam} (${game.AwayTeamMoneyLine})`}
																	type='button'
																	className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
																>
																	{game.AwayTeamMoneyLine}
																</button>
															</td>
															<td className='py-2 place-items-center text-center'>
																<button
																	onClick={handlePick}
																	name={`${game.AwayTeam} (${game.PointSpread})`}
																	type='button'
																	className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
																>
																	{game.PointSpread}
																</button>
															</td>
														</tr>
														<tr>
															<th className='py-2 semi-bold'>
																{game.HomeTeam}
															</th>
															<td className='place-items-center text-center'>
																<button
																	onClick={handlePick}
																	name={`${game.HomeTeam} (${game.HomeTeamMoneyLine})`}
																	type='button'
																	className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
																>
																	{game.HomeTeamMoneyLine}
																</button>
															</td>
															<td className='place-items-center text-center'>
																<button
																	onClick={handlePick}
																	name={`${game.HomeTeam} (${game.PointSpread})`}
																	type='button'
																	className='w-32 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
																>
																	{game.PointSpread}
																</button>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							);
					  })
					: null}
				<Toaster />
			</div>
		</>
	);
}
