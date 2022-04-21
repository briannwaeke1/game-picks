import React, { useState } from 'react';

export default function Details(props) {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className='block space-y-4 md:flex md:space-y-0 md:space-x-4'>
				<button
					class='block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
					type='button'
					data-modal-toggle='small-modal'
					onClick={() => setToggle(true)}
				>
					More Details
				</button>
			</div>
			{toggle && (
				<div
					id='small-modal'
					tabindex='-1'
					className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'
				>
					<div className='relative p-4 w-full max-w-md h-full md:h-auto'>
						<div className='relative bg-black rounded-lg shadow text-white'>
							<div className='flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600'>
								<h3 className='text-xl font-medium text-white'>
									Bookmakers Odds
								</h3>
								<button
									type='button'
									className='text-white bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
									data-modal-toggle='small-modal'
									onClick={() => setToggle(false)}
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
											clip-rule='evenodd'
										></path>
									</svg>
								</button>
							</div>

							<div className='p-6 space-y-6'>
								<p className='text-base leading-relaxed text-white'>
									{props.game.bookmakers.title}
								</p>
								<p className='text-base leading-relaxed text-white'>Details</p>
							</div>

							<div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
								<div className='p-6 space-y-6'>
									<p className='text-base leading-relaxed text-white '>
										Details
									</p>
									<p className='text-base leading-relaxed text-white'>
										Details
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
