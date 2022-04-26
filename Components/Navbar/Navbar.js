import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav class='container flex justify-around py-8 mx-auto bg-white'>
			<div class='flex items-center'>
				<Link href='/'>
					<a>
						<h3 class='text-3xl font-semibold tracking-wide text-blue-600'>
							Game<span className='text-black'>Picks</span>
						</h3>
					</a>
				</Link>
			</div>
			<div class='items-center hidden space-x-8 lg:flex'>
				<div className='relative'>
					<button onClick={() => setToggle(!toggle)}>
						<div className='p-2 rounded-full ring-2 ring-blue-600 bg-white'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='w-6 h-6 text-black'
								fill='currenColor'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
								/>
							</svg>
						</div>
					</button>
					{toggle && (
						<div className='absolute w-36'>
							<div className='w-full bg-white rounded-lg shadow-lg'>
								<ul className='divide-y-2 divide-gray-200'>
									<li className='flex justify-between p-3 hover:bg-blue-600 hover:text-black'>
										Hello, user!
									</li>
									<div className='flex justify-between p-3 hover:bg-blue-600 hover:text-black cursor-pointer'>
										<Link href='/myaccount'>
											<a>My Account</a>
										</Link>
									</div>
									<div className='flex justify-between p-3 hover:bg-blue-600 hover:text-black cursor-pointer'>
										<Link href='/leaderboard'>
											<a>Leaderboard</a>
										</Link>
									</div>
									<div className='flex items-center justify-between p-3 hover:bg-blue-600 cursor-pointer'>
										<button onClick={() => supabase.auth.signOut()}>
											Sign Out
										</button>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M17 8l4 4m0 0l-4 4m4-4H3'
											/>
										</svg>
									</div>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
