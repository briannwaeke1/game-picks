import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import Link from 'next/link';

const navigation = [
	{ name: 'Upcoming Games', href: '/', current: true },
	{ name: 'Leaderboard', href: '/leaderboard', current: false },
	{ name: 'My Profile', href: '/profile', current: false }
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	const [modalToggle, setModalToggle] = useState(false);

	return (
		<Disclosure as='nav' className='sticky top-0 bg-white'>
			{({ open }) => (
				<>
					<div className='min-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white border-b border-black-50'>
						<div className='relative flex items-center justify-between h-16 md:mx-20 mx-0'>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded text-black hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<MenuIcon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='flex-shrink-0 flex items-center '>
									<h1 className='font-semibold text-2xl cursor-pointer '>
										Game<span className='text-blue-500'>Picks</span>
									</h1>
								</div>
								<div className='hidden sm:block sm:ml-6 md:ml-60'>
									<div className='flex space-x-4'>
										{navigation.map(item => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? 'bg-blue-500 shadow-lg text-white'
														: 'text-gray-300 hover:shadow-lg hover:bg-blue-500 hover:text-white',
													'px-3 py-2 rounded text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>

							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<button className='px-6 py-2 rounded text-sm font-bold border bg-green-500 text-white hover:shadow-lg'>
									Bet Slip
								</button>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<Link href='/signin' passHref>
									<div
										as='button'
										className='px-6 py-2 rounded text-sm font-medium border border-blue-100 text-blue-500 hover:bg-blue-500 hover:shadow-lg hover:text-white'
									>
										<a>Log In</a>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='px-2 pt-2 pb-3 space-y-1'>
							{navigation.map(item => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className={classNames(
										item.current
											? 'bg-blue-500 shadow-lg text-white'
											: 'text-black hover:bg-blue-500 hover:shadow-lg hover:text-white',
										'block px-3 py-2 rounded text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
