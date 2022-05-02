import React from 'react';

const GamesListContainer = () => {
	let date = new Date().toDateString();
	return (
		<div className='container mx-auto w-5/6 sm:w-2/3 h-full'>
			<div className='w-full bg-white py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow-xl rounded'>
				<div className='mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2'>
					<h2 className='text-black text-lg font-bold'>
						Upcoming Games - {date}
					</h2>
				</div>
				<ul className='hidden lg:flex items-center lg:mt-6 xl:mt-0'>
					<li className='cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 xl:mr-0 xl:ml-0 bg-blue-500 text-white text-sm'>
						NBA
					</li>
					<li className='cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 text-black hover:bg-blue-500  hover:text-white text-sm'>
						MLB
					</li>
					<li className='cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 text-black hover:bg-blue-500  hover:text-white text-sm'>
						NFL
					</li>
					<li className='cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 text-black hover:bg-blue-500  hover:text-white text-sm'>
						EPL
					</li>
				</ul>
			</div>
		</div>
	);
};

export default GamesListContainer;
