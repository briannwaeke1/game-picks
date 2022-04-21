import Link from 'next/link';
import { useContext } from 'react';
import { useAuth } from '../lib/auth';
import { addChannel, deleteChannel } from '../lib/store';
import TrashIcon from './TrashIcon';

export default function Layout(props) {
	const { user, userRoles } = useAuth();

	const slugify = text => {
		return text
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/[^\w-]+/g, '') // Remove all non-word chars
			.replace(/--+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	};

	const newChannel = async () => {
		const slug = prompt('Enter channel name');
		if (slug) {
			addChannel(slugify(slug), user.id);
		}
	};

	return (
		<main className='main flex h-screen w-screen overflow-hidden'>
			{/* Sidebar */}
			<nav
				className='w-64 bg-black text-white overflow-scroll'
				style={{ maxWidth: '20%', minWidth: 150, maxHeight: '100vh' }}
			>
				<div className='p-2 '>
					<div className='p-2 flex flex-col space-y-10'>
						<Link href='/games'>
							<a className='text-center bg-green-400 font-semibold hover:bg-green-300 text-black py-2 px-4 rounded w-full transition duration-150'>
								Go Back
							</a>
						</Link>
					</div>
					<hr className='m-2' />
					<div className='p-2 flex flex-col space-y-10'>
						<h6 className='text-xs'>Logged in as: {user?.email}</h6>

						<button
							className='bg-green-400 hover:bg-green-300 text-black font-semibold py-2 px-4 rounded w-full transition duration-150'
							onClick={() => newChannel()}
						>
							Create Channel
						</button>
					</div>
					<hr className='m-2' />
					<h4 className='font-bold'> Active Channels</h4>
					<ul className='channel-list'>
						{props.channels.map(x => (
							<SidebarItem
								channel={x}
								key={x.id}
								isActiveChannel={x.id === props.activeChannelId}
								user={user}
								userRoles={userRoles}
							/>
						))}
					</ul>
				</div>
			</nav>

			{/* Messages */}
			<div className='flex-1 bg-black h-screen'>{props.children}</div>
		</main>
	);
}

const SidebarItem = ({ channel, isActiveChannel, user, userRoles }) => (
	<>
		<li className='flex items-center justify-between'>
			<Link href='/channels/[id]' as={`/channels/${channel.id}`}>
				<a className={isActiveChannel ? 'font-bold' : ''}>{channel.slug}</a>
			</Link>

			<button onClick={() => deleteChannel(channel.id)}>
				<TrashIcon />
			</button>
		</li>
	</>
);
