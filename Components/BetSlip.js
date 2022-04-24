import React from 'react';

export default function BetSlip(props) {
	return (
		<div className='rounded my-1 px-1 py-4 border-2'>
			<h3 className='font-semibold text-2xl text-black p-3'>Bet Slip</h3>
			<div className='relative w-full px-4'>
				<ul>
					{props.slip.map(item => {
						return (
							<div className='flex'>
								<div>
									<li>{item}</li>
								</div>
								<div className='justify-self-end'>
									<button>X</button>
								</div>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
