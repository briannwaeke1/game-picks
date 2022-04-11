import Link from 'next/link';
import { Auth, Button, Typography } from '@supabase/ui';

import Layout from '../components/Layout';

export default function Profile() {
	return (
		<Layout>
			<h2>User Profile</h2>
			<div className='heading'>Last Signed In</div>
			<code className='highlight'>N/A</code>
			<Link href='/'>
				<Button className='w-full p-3 rounded-lg mt-8'>Go Home</Button>
			</Link>
		</Layout>
	);
}
