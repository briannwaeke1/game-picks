import Head from 'next/head';
import Nav from './Nav';

export default function Layout({ children }) {
	return (
		<div>
			<Nav />
			<div className='flex flex-col items-center justify-center min-h-screen py-2'>
				<Head>
					<title>DudePicks</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className='flex flex-col items-center justify-center flex-1 w-full px-8 text-center sm:px-20'>
					<h1 className='text-5xl font-bold sm:text-6xl'>
						Dude<span className='font-black text-green-400'>Picks</span>
					</h1>
					<div className='inline-flex flex-col w-full max-w-sm mt-8 space-y-8'>
						{children}
					</div>
				</main>
			</div>
		</div>
	);
}