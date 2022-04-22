import Layout from '../../Components/Layout';
import Message from '../../Components/Message';
import MessageInput from '../../Components/MessageInput';
import { useAuth } from '../../lib/auth';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useStore, addMessage } from '../../lib/store';

const ChannelsPage = props => {
	const router = useRouter();
	const messagesEndRef = useRef(null);
	const { user } = useAuth();

	// Else load up the page
	const { id: channelId } = router.query;
	const { messages, channels } = useStore({ channelId });

	useEffect(() => {
		messagesEndRef.current.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	}, [messages]);

	// redirect to public channel when current channel is deleted
	useEffect(() => {
		if (!channels.some(channel => channel.id === Number(channelId))) {
			router.push('/channels/1');
		}
	}, [channels, channelId]);

	// Render the channels and messages
	return (
		<Layout channels={channels} activeChannelId={channelId}>
			<div className='relative h-screen'>
				<div className='Messages h-full pb-16'>
					<div className='p-2 overflow-y-auto'>
						{messages.map(x => (
							<Message key={x.id} message={x} />
						))}
						<div ref={messagesEndRef} style={{ height: 0 }} />
					</div>
				</div>
				<div className='p-2 absolute bottom-0 left-0 w-full'>
					<MessageInput
						onSubmit={async text => addMessage(text, channelId, user.id)}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default ChannelsPage;
