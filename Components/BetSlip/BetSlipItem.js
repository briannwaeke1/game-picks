import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Destructure `props.id`, since we just need the ID value
const TodoListItem = ({ id }) => {
	// Call our `selectTodoById` with the state _and_ the ID value
	const todo = useSelector(state => selectTodoById(state, id));
	const { text, completed, color } = todo;

	const dispatch = useDispatch();

	const onDelete = () => {
		dispatch(todoDeleted(todo.id));
	};

	return (
		<li>
			<div className='view'>
				<div className='segment label'>
					<input
						className='toggle'
						type='checkbox'
						checked={completed}
						onChange={handleCompletedChanged}
					/>
					<div className='todo-text'>{text}</div>
				</div>
				<div className='segment buttons'>
					<select
						className='colorPicker'
						value={color}
						style={{ color }}
						onChange={handleColorChanged}
					>
						<option value=''></option>
						{colorOptions}
					</select>
					<button className='destroy' onClick={onDelete}>
						X
					</button>
				</div>
			</div>
		</li>
	);
};

export default TodoListItem;
