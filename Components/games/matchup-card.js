import { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';

const MatchupCard = props => {
	const [selected, setSelected] = useState();
	const [awayTeam, setAwayTeam] = useState();
	const [homeTeam, setHomeTeam] = useState();

	useEffect(() => {
		setAwayTeam(props.game.AwayTeam);
		setHomeTeam(props.game.HomeTeam);
	}, []);

	useEffect(() => {
		toast.success(`You selected ${selected} to win!`);
	}, [selected]);

	return (
		<>
			<div
				key={props.game.GameID}
				className='container mx-auto my-5 w-1/2 h-full'
			>
				<div className='w-full bg-white flex flex-col xl:flex-row items-start justify-between px-10 py-10 shadow-xl rounded'>
					<div className='w-full px-4 py-16'>
						<div className='mx-auto w-full max-w-md'>
							<RadioGroup value={selected} onChange={setSelected}>
								<RadioGroup.Label className='sr-only'>
									{props.game.GameID}
								</RadioGroup.Label>
								<div className='space-y-4'>
									<div>
										<RadioGroup.Option
											key={awayTeam}
											value={awayTeam}
											className={({ active, checked }) =>
												`${active ? '' : ''}
                  ${checked ? 'bg-blue-500 text-white ' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-xl focus:outline-none`
											}
										>
											{({ active, checked }) => (
												<>
													<div className='flex w-full items-center justify-between'>
														<div className='flex items-center'>
															<div className='text-sm'>
																<RadioGroup.Label
																	as='p'
																	className={`font-medium  ${
																		checked ? 'text-white' : 'text-gray-900'
																	}`}
																>
																	{awayTeam}
																</RadioGroup.Label>
															</div>
														</div>
														{checked && (
															<div className='shrink-0 text-white'>
																<CheckIcon className='h-6 w-6' />
															</div>
														)}
													</div>
												</>
											)}
										</RadioGroup.Option>
									</div>
									<div>
										<RadioGroup.Option
											key={homeTeam}
											value={homeTeam}
											className={({ active, checked }) =>
												`${active ? '' : ''}
                  ${checked ? 'bg-blue-500  text-white ' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-xl focus:outline-none`
											}
										>
											{({ active, checked }) => (
												<>
													<div className='flex w-full items-center justify-between'>
														<div className='flex items-center'>
															<div className='text-sm'>
																<RadioGroup.Label
																	as='p'
																	className={`font-medium  ${
																		checked ? 'text-white' : 'text-gray-900'
																	}`}
																>
																	{homeTeam}
																</RadioGroup.Label>
															</div>
														</div>
														{checked && (
															<div className='shrink-0 text-white'>
																<CheckIcon className='h-6 w-6' />
															</div>
														)}
													</div>
												</>
											)}
										</RadioGroup.Option>
									</div>
								</div>
							</RadioGroup>
						</div>
					</div>
				</div>
			</div>
			{selected !== '' ? <Toaster /> : null}
		</>
	);
};

export default MatchupCard;

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
