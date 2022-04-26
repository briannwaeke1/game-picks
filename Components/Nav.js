import Link from 'next/link';
import { useAuth } from '../lib/auth';
import { useState } from 'react';

export default function Nav() {
	const { user, signOut } = useAuth();
	const [navToggle, setNavToggle] = useState(false);

	return (
		<div className='bg-black w-[100%] h-[5%]'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='hidden sm:block sm:ml-6'>
							
								<Link href='/games'>
									<a className='text-white hover:text-green-400 px-3 py-2 rounded-sm font-medium hover:outline'>
										Games
									</a>
								</Link>
								<Link href='/leaderboard'>
									<a className='text-white hover:text-green-400 px-3 py-2 rounded-sm font-medium hover:outline'>
										Leaderboard
									</a>
								</Link>
								<Link href='/channels/1'>
									<a className='text-white hover:text-green-400 px-3 py-2 rounded-sm font-medium hover:outline'>
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
										<div className='flex space-x-8 right-0 h-9'>
											<button onClick={() => setNavToggle(!navToggle)}>
												<div className='relative w-10 h-10 overflow-hidden rounded-full hover:ring-white hover:ring-2 bg-green-400 shadow-lg'>
													<svg
														className='absolute w-12 h-15 text-black -left-1'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' />
													</svg>
												</div>
											</button>
											{navToggle && (
												<div className='origin-top-right absolute -right-14 my-14 w-40 rounded-md bg-black divide-y divide-grey text-center'>
													<p className='text-xs py-4 text-white'>
														Logged in as: {user?.email}
													</p>

													<Link href='/profile'>
														<a className='text-sm py-4 font-bold block text-white'>
															My Account
														</a>
													</Link>

													<div
														className='text-sm py-4 font-bold block  text-white'
														onClick={signOut}
													>
														Sign Out
													</div>
												</div>
											)}
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
