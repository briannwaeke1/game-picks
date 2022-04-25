import React, { useRef } from 'react';
import useSWR from 'swr';
import BetSlip from './BetSlip';
import { addToBetslip } from '../redux/slices/betslip.slice';
import { useDispatch } from 'react-redux';

export default function GameCard({ id }) {
	const dispatch = useDispatch();
	const buttonElement = useRef();

	const handlePick = e => {
		const id = e.target.id;
		console.log(id);
		dispatch(addToBetslip(id));
	};

	const fetcher = url => fetch(url).then(res => res.json());

	const { data, error } = useSWR(
		'https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/today?key=ce1cea60fa674f5ebb95719e856f2b47',
		fetcher
	);

	if (error) return 'An error has occurred.';
	if (!data) return 'Loading...';

	return (
		<div className='flex flex-wrap justify-center p-8'>
			<ul>
				{data.map(matchup => {
					return (
						<li key={matchup.GameID}>
							<div className='w-full px-2'>
								<div className='rounded my-1 px-1 py-4 border-2'>
									<div className='flex items-center'>
										<div className='relative w-full px-4 flex-1'>
											<h3 className='font-semibold text-2xl text-black'>
												{matchup.AwayTeam} @ {matchup.HomeTeam}
											</h3>
											<p className=' text-xs text-blueGray-300 pb-8'>
												{new Date(`${matchup.DateTime}`).toLocaleDateString(
													'en-us',
													{
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													}
												)}{' '}
												@{' '}
												{new Date(`${matchup.DateTime}`).toLocaleTimeString(
													'en',
													{
														timeStyle: 'short',
														hour12: true
													}
												)}
											</p>
										</div>
										<div className='px-4 text-right'>
											<button
												className='bg-green-400 text-black active:bg-green-600 text-sm font-medium uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-green-300 hover:outline'
												type='button'
											>
												Details
											</button>
										</div>
									</div>

									<div className='block'>
										<table className='items-center w-full bg-transparent border-collapse'>
											<thead className='thead-light'>
												<tr>
													<th className='px-4 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
														Matchup
													</th>
													<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center'>
														Moneyline
													</th>
													<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center min-w-140-px'>
														Spread
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center'>
														{matchup.AwayTeam}
													</th>
													<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center'>
														<button
															onClick={handlePick}
															ref={buttonElement}
															id={`${matchup.AwayTeam} (${matchup.AwayTeamMoneyLine})`}
															value={`${matchup.AwayTeam} (${matchup.AwayTeamMoneyLine})`}
															type='button'
															className='w-24 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150 '
														>
															{matchup.AwayTeamMoneyLine}
														</button>
													</td>
													<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center'>
														<button
															id={`${matchup.AwayTeam} (${matchup.PointSpread})`}
															onClick={handlePick}
															value={`${matchup.AwayTeam} (${matchup.PointSpread})`}
															type='button'
															className='w-24 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
														>
															{matchup.PointSpread}
														</button>
													</td>
												</tr>
												<tr>
													<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center'>
														{matchup.HomeTeam}
													</th>
													<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center'>
														<button
															onClick={handlePick}
															value={`${matchup.HomeTeam} (${matchup.HomeTeamMoneyLine})`}
															id={`${matchup.HomeTeam} (${matchup.HomeTeamMoneyLine})`}
															type='button'
															className='w-24 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
														>
															{matchup.HomeTeamMoneyLine}
														</button>
													</td>
													<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center'>
														<button
															onClick={handlePick}
															id={`${matchup.HomeTeam} (${matchup.PointSpread})`}
															value={`${matchup.HomeTeam} (${matchup.PointSpread})`}
															type='button'
															className='w-24 h-10 rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black ease-linear transition-all duration-150'
														>
															{matchup.PointSpread}
														</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<div className='w-1/4 px-2'>
				<BetSlip />
			</div>
		</div>
	);
}
