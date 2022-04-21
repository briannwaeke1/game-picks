import Link from 'next/link';
import { useAuth } from '../lib/auth';
import { createContext, useContext, useEffect, useState } from 'react';

export default function Nav() {
	const { user, view, signOut } = useAuth();
	return (
		<div className='bg-black w-[100%] h-[5%]'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='hidden sm:block sm:ml-6'>
							<div className='flex space-x-4'>
								<Link href='/'>
									<a className='flex items-center text-2xl font-bold font-black text-green-400'>
										Game<span className='text-white'>Picks</span>
									</a>
								</Link>
								<Link href='/games'>
									<a className='text-white hover:bg-black hover:text-white px-3 py-2 rounded-sm font-medium hover:outline'>
										Games
									</a>
								</Link>
								<Link href='/leaderboard'>
									<a className='text-white hover:bg-black hover:text-white px-3 py-2 rounded-sm font-medium hover:outline'>
										Leaderboard
									</a>
								</Link>
								<Link href='/channels.[id]'>
									<a className='text-white hover:bg-black hover:text-white px-3 py-2 rounded-sm font-medium hover:outline'>
										Chat
									</a>
								</Link>

								<div className='flex space-x-2 origin-top-right absolute right-0 h-9'>
									{!user && (
										<button className='w-24 rounded-sm  py-1 ring-1 ring-white outline text-white  ring-opacity-5 focus:outline- hover:text-black hover:bg-white hover:outline font-medium'>
											<Link href='/'>Sign In</Link>
										</button>
									)}

									{user && (
										<div className='flex space-x-8  right-0 h-9'>
											 
											<div className='relative w-10 h-10 overflow-hidden rounded-full ring-white ring-1 bg-green-400'>
												<Link href='/profile'>
													<svg
														className='absolute w-12 h-12 text-black -left-1'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															fill-rule='evenodd'
															d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
															clip-rule='evenodd'
														></path>
													</svg>
												</Link>
											</div>
											<button
												type='button'
												className='w-24 rounded-sm  py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline- hover:text-white hover:bg-black hover:outline font-medium'
												onClick={signOut}
											>
												Sign Out
											</button>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
