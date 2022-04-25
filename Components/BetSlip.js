import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAll, removeItem } from '../redux/slices/betslip.slice';
import useId from 'react-use-uuid';

export default function BetSlip() {
	const id = useId();
	// Extracting betslip state from redux store
	const betslipList = useSelector(state => state.betslip);

	// Reference to the dispatch function from redux store
	const dispatch = useDispatch();

	const handleClearAll = () => {
		dispatch(removeAll());
	};

	const handleClearItem = e => {
		dispatch(removeItem(e.target.id));
	};

	const slipItems = betslipList.map(item => (
		<div key={item.id}>
			<div>{item}</div>
			<div>
				<button onClick={handleClearItem} id={id}>
					X
				</button>
			</div>
		</div>
	));

	console.log(slipItems);
	return (
		<div className='rounded my-1 px-1 py-4 border-2'>
			<h3 className='font-semibold text-2xl text-black px-4'>Bet Slip</h3>
			<div className='relative w-full px-4'>
				{betslipList.length === 0 ? (
					<h1 className='pt-4'>Your BetSlip is Empty!</h1>
				) : (
					<>
						<div id={id} className='block'>
							<ul>{slipItems}</ul>
						</div>
						<div className='flex flex-row justify-center space-x-4'>
							<button className='bg-green-400 text-black active:bg-green-600 text-md font-medium uppercase px-3 py-3 rounded outline-none focus:outline-none mt-3 ease-linear transition-all duration-150 hover:bg-green-500 hover:outline w-32'>
								Submit
							</button>
							<button
								className='bg-red-400 text-black active:bg-red-600 text-md font-medium uppercase px-3 py-3 rounded outline-none focus:outline-none mt-3 ease-linear transition-all duration-150 hover:bg-red-500 hover:outline w-32'
								onClick={handleClearAll}
							>
								Clear All
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
