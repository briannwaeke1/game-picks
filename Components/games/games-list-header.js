import React from 'react';

const GamesListHeader = () => {
	let date = new Date().toDateString();
	return (
		<div className='container mx-auto w-5/6 sm:w-2/3 h-full'>
			<div className='w-full bg-white py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow-xl rounded'>
				<div className='mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2'>
					<h2 className='text-black text-lg font-bold'>{date}</h2>
				</div>
				<div className='lg:hidden w-full relative mt-2 md:mt-4'>
					<div className='absolute inset-0 m-auto mr-4 z-0 w-6 h-6'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='icon icon-tabler icon-tabler-selector'
							width={24}
							height={24}
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='#a0aec0'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' />
							<polyline points='8 9 12 5 16 9' />
							<polyline points='16 15 12 19 8 15' />
						</svg>
					</div>
					<select
						aria-label='Selected tab'
						className='form-select block w-full p-3 border border-black-50 rounded text-black appearance-none bg-transparent relative z-10'
					>
						<option className='text-sm text-black' selected>
							NBA
						</option>
						<option className='text-sm text-black'>MLB</option>
						<option className='text-sm text-black'>NFL</option>
						<option className='text-sm text-black'>EPL</option>
					</select>
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

export default GamesListHeader;
