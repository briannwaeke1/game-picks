import Link from 'next/link';
import { Auth, Button, Typography } from '@supabase/ui';
import { useAuth } from '../lib/auth';
import Layout from '../components/Layout';

export default function Profile() {
	const { user } = useAuth();
	return (
		<Layout>
			{user && (
				<div className='p-4 w-full bg-white rounded-lg border border-gray-200 shadow-xl sm:p-6 lg:p-8'>
					<div className='flex justify-between items-center mb-4'>
						<h5 className='text-2xl font-medium leading-none text-black'>
							User Stats
						</h5>

						<div className='relative w-10 h-10 overflow-hidden rounded-full bg-black'>
							<svg
								className='absolute w-12 h-12 text-green-400 -left-1'
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
						</div>
					</div>
					<div className='flex flex-col pb-10 content-start'>
						{' '}
						<div className='place-items-start space-y-3'>
							<div>
								<div className='text-xl text-left font-medium text-black'>
									User
								</div>
								<p className='text-slate-500 text-left'>{user.email}</p>
							</div>
							<div>
								<div className='text-xl font-medium text-black text-left'>
									Joined
								</div>
								<p className='text-slate-500 text-left'>Apr 11, 2022</p>
							</div>
							<div>
								<div className='text-xl font-medium text-black text-left'>
									Record
								</div>
								<p className='text-slate-500 text-left'>20 - 10</p>
							</div>
							<div>
								<div className='text-xl font-medium text-black text-left'>
									Last 10
								</div>
								<p className='text-slate-500 text-left'>8-2</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</Layout>
	);
}
