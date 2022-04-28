import React from 'react';
import { useSelector } from 'react-redux';
import BetSlipItem from './BetSlipItem';

import { selectFilteredTodoIds } from './todosSlice';

const BetSlipList = () => {
	const todoIds = useSelector(selectFilteredTodoIds);
	const loadingStatus = useSelector(state => state.todos.status);

	if (loadingStatus === 'loading') {
		return (
			<div className='betslip-list'>
				<div className='loader' />
			</div>
		);
	}

	const renderedListItems = todoIds.map(todoId => {
		return <BetSlipItem key={todoId} id={todoId} />;
	});

	return <ul className='betslip-list'>{renderedListItems}</ul>;
};

export default BetSlipList;
