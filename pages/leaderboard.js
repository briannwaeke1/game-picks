import React from 'react';
import Nav from '../Components/Nav';

export default function LeaderBoard() {
	return (
		<>
			<div className='sticky top-0'>
				<Nav />
			</div>
			<div className='container px-4 mx-auto'>
				<div className='flex flex-wrap'>
					<div className='w-1/3 px-4'>
						<span className='text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100'>
							One of three columns
						</span>
					</div>
					<div className='w-1/3 px-4'>
						<span className='text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100'>
							One of three columns
						</span>
					</div>
					<div className='w-1/3 px-4'>
						<span className='text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100'>
							One of three columns
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
