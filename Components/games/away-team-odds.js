import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const AwayTeamOdds = () => {
	const [selected, setSelected] = useState(null);

	return (
		<div className='w-full px-4 py-16 '>
			<div className='w-full'>
				<RadioGroup value={selected} onChange={setSelected}>
					<RadioGroup.Label className='sr-only'>Game Details</RadioGroup.Label>
					<div className='space-y-2'>
						<RadioGroup.Option
							key={null}
							value={null}
							className={({ active, checked }) =>
								`${active ? 'shadow-2xl' : ''}
                  ${checked ? 'bg-blue-500 text-black' : 'bg-white'}
                    relative rounded-lg shadow-2xl px-5 py-4 cursor-pointer flex focus:outline-none`
							}
						>
							{({ active, checked }) => (
								<>
									<div className='flex items-center justify-between w-full'>
										<div className='flex items-center'>
											<div className='text-md'>
												<RadioGroup.Label
													as='p'
													className={`font-medium  ${
														checked ? 'text-white' : 'text-black'
													}`}
												>
													<div className='flex space-x-16'>
														<div className='absolute py-4'>
															<span>
																<TeamLogos src={`${team[game].url}`} />
															</span>{' '}
														</div>
														<div className='pl-3 pt-4 pb-3'>
															<span>{team.fullName}</span>
														</div>
													</div>
												</RadioGroup.Label>
												<RadioGroup.Description
													as='span'
													className={`inline ${
														checked ? 'text-black' : 'text-black'
													}`}
												>
													<span></span>
												</RadioGroup.Description>
											</div>
										</div>
										{checked && (
											<div className='flex-shrink-0 text-white'>
												<CheckIcon className='w-6 h-6' />
											</div>
										)}
									</div>
								</>
							)}
						</RadioGroup.Option>
					</div>
				</RadioGroup>
			</div>
		</div>
	);
};

function CheckIcon(props) {
	return (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<circle cx={12} cy={12} r={12} fill='#fff' opacity='0.3' />
			<path
				d='M7 13l3 3 7-7'
				stroke='#4ade80'
				strokeWidth={2.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}

export default AwayTeamOdds;
