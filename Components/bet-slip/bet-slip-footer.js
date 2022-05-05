import React from 'react';
const BetSlipFooter = () => {
	return (
		<div className='flex justify-between mt-10'>
			<div>
				<button className='px-6 py-2 rounded text-lg font-semibold bg-green-500 text-white hover:shadow-lg'>
					Submit Picks
				</button>
			</div>
			<div>
				<button className='text-lg px-6 py-2 rounded font-semibold bg-red-500 text-white hover:shadow-lg'>
					Delete All
				</button>
			</div>
		</div>
	);
};

export default BetSlipFooter;
