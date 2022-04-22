import { deleteMessage } from '../lib/store';
import TrashIcon from './TrashIcon';

const Message = ({ message }) => {
	return (
		<div className='py-4 flex items-center space-x-4'>
			<div className='text-white w-4'>
				<button onClick={() => deleteMessage(message.id)}>
					<TrashIcon />
				</button>
			</div>
			<div>
				<p className='text-green-400 text-sm'>
					{new Date(`${message.inserted_at}`).toLocaleTimeString('en', {
						timeStyle: 'short',
						hour12: true
					})}
				</p>
				<p className='text-green-400 font-bold'>{message.author.username}</p>
				<p className='text-white'>{message.message}</p>
			</div>
		</div>
	);
};

export default Message;
