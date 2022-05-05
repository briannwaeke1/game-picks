import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { XIcon } from '@heroicons/react/outline';
import { Disclosure } from '@headlessui/react';
import BetSlipHeader from './bet-slip-header';
import BetSlipItem from './bet-slip-item';
import BetSlipFooter from './bet-slip-footer';

export default function Modal({ openModal, onClose, children }) {
	function escHandler({ key }) {
		if (key === 'Escape') {
			onClose();
		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('keydown', escHandler);
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('keydown', escHandler);
			}
		};
	}, []);

	if (typeof document !== 'undefined') {
		return createPortal(
			<div
				className={`fixed inset-0 ${openModal ? '' : 'pointer-events-none'}`}
			>
				{/* backdrop */}
				<div
					className={`fixed inset-0 bg-black ${
						openModal ? 'opacity-50' : 'pointer-events-none opacity-0'
					} transition-opacity duration-300 ease-in-out`}
					onClick={onClose}
				/>

				{/* content */}
				<div
					className={`fixed right-0 h-full bg-white shadow-lg w-full max-w-screen-sm p-4 ${
						openModal ? 'opacity-100' : 'pointer-events-none opacity-0'
					} transition-opacity duration-300 ease-in-out`}
				>
					<div className='text-right'>
						<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded text-black hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
							<XIcon
								onClick={onClose}
								className='block h-6 w-6'
								aria-hidden='true'
							/>
						</Disclosure.Button>
					</div>
					<BetSlipHeader />
					<BetSlipItem />
					<BetSlipItem />
					<BetSlipItem />
					<BetSlipItem />
					<BetSlipItem />
					<BetSlipFooter />
				</div>
			</div>,
			document.body
		);
	} else {
		return null;
	}
}
