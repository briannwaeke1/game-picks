import Link from 'next/link';
import { Auth, Button, Typography } from '@supabase/ui';
import Nav from '../Components/Nav';

export default function Games() {
	return (
		<div>
			<Nav />
			<h2 className='flex items-center justify-center'>Today's Schedule</h2>
			<code className='highlight flex items-center justify-center  w-full'>
				Sun Apr 10, 2022
			</code>
		</div>
	);
}
