import Link from 'next/link';
import { useAuth } from '../lib/auth';
import { Auth, Button, Typography } from '@supabase/ui';

export default function Nav() {
	const { user, view, signOut } = useAuth();
	return (
		<nav className='bg-black w-[100%] h-[5%]'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='hidden sm:block sm:ml-6'>
							<div className='flex space-x-4'>
								<Link href='/'>
									<a className='flex items-center text-2xl font-bold font-black text-green-400'>
										GamePicks
									</a>
								</Link>
								<Link href='/games'>
									<a className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-sm font-medium hover:outline'>
										Games
									</a>
								</Link>
								<Link href='/profile'>
									<a className='text-white hover:bg-white hover:text-black px-3 py-2 rounded-sm font-medium hover:outline'>
										Profile
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
											<div className='flex items-center'>
												<Typography.Text type='success'>
													Signed in: {user.email}
												</Typography.Text>
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
		</nav>
	);
}
