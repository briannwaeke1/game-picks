import Navbar from './navbar/navbar';

export default function Layout({ children }) {
	return (
		<div className='bg-gray-100'>
			<Navbar />

			<main className='bg-gray-100 mt-10'>{children}</main>
		</div>
	);
}
