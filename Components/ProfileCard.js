import React from 'react';

export default function ProfileCard() {
	return (
		<>
			<div className='relative flex flex-col min-w-0 break-words mb-6 shadow-xl rounded-lg border'>
				<div className='rounded-t bg-black px-6 py-6'>
					<div className='text-center flex justify-between'>
						<h6 className='text-white text-xl font-bold'>My account</h6>

						<div className='relative w-10 h-10 overflow-hidden rounded-full ring-white ring-2 bg-green-400 shadow-lg'>
							<svg
								className='absolute w-12 h-15 text-black -left-1'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
					<form>
						<h6 className='text-black text-sm mt-6 mb-6 font-bold uppercase'>
							User Information
						</h6>
						<div className='flex flex-wrap'>
							<div className='w-full lg:w-6/12 px-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-black text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Username
									</label>
									<input
										type='text'
										className='border px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
										defaultValue='SudoChamp'
										disabled
									/>
								</div>
							</div>
							<div className='w-full lg:w-6/12 px-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-black text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Email address
									</label>
									<input
										type='email'
										className='border-0 px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
										defaultValue='bnwaeke@icloud.com'
										disabled
									/>
								</div>
							</div>
							<div className='w-full lg:w-6/12 px-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-black text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										First Name
									</label>
									<input
										type='text'
										className='border px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
										defaultValue='Brian'
										disabled
									/>
								</div>
							</div>
							<div className='w-full lg:w-6/12 px-4'>
								<div className='relative w-full mb-3'>
									<label
										className='block uppercase text-black text-xs font-bold mb-2'
										htmlFor='grid-password'
									>
										Last Name
									</label>
									<input
										type='text'
										className='border px-3 py-3 placeholder-black text-black bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none'
										defaultValue='Nwaeke'
										disabled
									/>
								</div>
							</div>
						</div>

						<hr className='mt-6 border-b-1 border-black' />

						<h6 className='text-black text-sm mt-3 mb-6 font-bold uppercase'></h6>

						<button
							className='bg-green-400 text-white active:bg-green-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-xl outline-none focus:outline-none mr-1 mb-6 ease-linear transition-all duration-150'
							type='button'
						>
							Edit
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
