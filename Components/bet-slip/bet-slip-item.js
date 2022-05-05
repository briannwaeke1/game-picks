import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';

const BetSlipItem = () => {
	return (
		<div className='relative flex w-full bg-white border border-radius p-2 mt-5 list-none justify-between'>
			<div className='align-center justify-center p-2'>
				<li>User Pick</li>
			</div>
			<div>
				<Disclosure.Button className='p-2 rounded text-black  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
					<XIcon className='block h-6 w-6' aria-hidden='true' />
				</Disclosure.Button>
			</div>
		</div>
	);
};

export default BetSlipItem;
