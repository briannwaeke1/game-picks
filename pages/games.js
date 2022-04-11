import Link from 'next/link';
import { Auth, Button, Typography } from '@supabase/ui';
import Nav from '../Components/Nav';
import Schedule from '../Components/Schedule';
import Layout from '../components/Layout';

export default function Games() {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);

	return (
		<div>
			<Layout>
				<h2 className='flex items-center justify-center'>Today's Schedule</h2>
				<code className='highlight flex items-center justify-center w-full'>
					{today.toDateString()}
				</code>
				<Schedule />
			</Layout>
		</div>
	);
}
