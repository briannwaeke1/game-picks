import React from 'react';

const BetSlipItem = () => {
	return (
		<div className='mx-12 space-y-12 lg:space-y-0 lg:flex lg:gap-4 lg:items-center lg:justify-center'>
			<div className='max-w-sm p-8 shadow-lg'>
				<h3 className='text-2xl text-center'>
					Bet<span className='text-blue-500'>Slip</span>
				</h3>
				<p className='text-center'></p>
				<div>
					<ul className='space-y-4'>
						<li>User Pick 1</li>
						<li>User Pick 2</li>
						<li>User Pick 3</li>
						<li>User Pick 4</li>
					</ul>
					<div className='flex items-center justify-center mt-4'>
						<button className='w-full px-2 py-2 text-white bg-green-500 rounded'>
							Submit Picks
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BetSlipItem;
