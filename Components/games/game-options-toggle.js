import React, { useState, useEffect } from 'react';

const GameOptions = props => {
	const [away, setAway] = useState(false);
	const [home, setHome] = useState(false);
	const [awayTeam, setAwayTeam] = useState();
	const [homeTeam, setHomeTeam] = useState();
	const [betSlip, setBetSlip] = useState([]);

	useEffect(() => {
		setAwayTeam(props.game.AwayTeam);
		setHomeTeam(props.game.HomeTeam);
	}, []);

	const handleAwayPick = event => {
		setAway(!away);
		setBetSlip(betSlip => [...betSlip, awayTeam]);
		console.log(`you selected ${awayTeam} to win`);
		console.log(betSlip);
	};

	const handleHomePick = () => {
		setHome(!home);
		setBetSlip(betSlip => [...betSlip, homeTeam]);
		console.log(`you selected ${homeTeam} to win`);
		console.log(betSlip);
	};

	return (
		<div
			key={props.game.GameID}
			className='container mx-auto my-5 w-1/3 h-full'
		>
			<div className='w-full bg-white flex flex-col xl:flex-row items-start justify-between px-10 py-10 shadow-xl rounded-lg'>
				<div className='w-full px-4 py-10'>
					<div className='mx-auto'>
						<div className='space-y-4'>
							<div className='flex w-full items-center justify-between'>
								<button
									type='button'
									key={awayTeam}
									value={awayTeam}
									onClick={handleAwayPick}
									className={`w-3/4 font-bold flex items-center justify-between ${
										away ? 'bg-blue-500 text-white ' : 'bg-white'
									}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-xl focus:outline-none`}
								>
									{awayTeam}
									{away && (
										<div className='shrink-0 text-white'>
											<CheckIcon className='h-6 w-6' />
										</div>
									)}
								</button>
							</div>
							<div className='justify-between'>
								<button
									type='button'
									key={homeTeam}
									onClick={handleHomePick}
									className={`w-3/4 font-bold flex items-center justify-between ${
										home ? 'bg-blue-500 text-white ' : 'bg-white'
									}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-xl focus:outline-none`}
								>
									{homeTeam}
									{home && (
										<div className='shrink-0 text-white'>
											<CheckIcon className='h-6 w-6' />
										</div>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameOptions;

function CheckIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<circle cx={12} cy={12} r={12} fill='#22c55e' />
			<path
				d='M7 13l3 3 7-7'
				stroke='#fff'
				strokeWidth={2.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
