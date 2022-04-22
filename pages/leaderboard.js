import React from 'react';
import Nav from '../Components/Nav';

import TableCard from '../Components/TableCard';

export default function LeaderBoard() {
	return (
		<>
			<div className='sticky top-0'>
				<Nav />
			</div>
			<div className='flex flex-wrap mt-4'>
				<div className='w-full mb-12 px-4'>
					<TableCard />
				</div>
			</div>
		</>
	);
}
