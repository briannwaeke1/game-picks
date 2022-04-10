import Link from 'next/link';

const navigation = [
	{ name: 'DudePicks', href: '/', current: true },
	{ name: 'Profile', href: '/profile', current: false },
	{ name: 'Friends', href: '#', current: false },
	{ name: 'Chat', href: '#', current: false }
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Nav() {
	return (
		<nav className='bg-black w-[100%] h-[5%]'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='hidden sm:block sm:ml-6'>
							<div className='flex space-x-4'>
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? 'bg-white text-black'
												: 'text-white hover:bg-white hover:text-black  ',
											'px-3 py-2 rounded-sm font-medium hover:outline'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
								<div className='flex space-x-2 origin-top-right absolute right-0 h-9'>
									<button className='w-24 rounded-sm  py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline- hover:text-white hover:bg-black hover:outline font-medium'>
										<Link href='/login'>Login</Link>
									</button>
									<button className='w-24 rounded-sm py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hover:text-white hover:bg-black hover:outline font-medium'>
										Signup
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
