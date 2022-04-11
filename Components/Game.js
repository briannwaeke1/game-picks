import React, { useState } from 'react';

export default function Game(props) {
	const [userPick, setUserPick] = useState(null);

	const changeUserPick = e => {
		if (userPick === null) {
			const id = e.target.name;
			setUserPick(id);
		} else {
			setUserPick(null);
		}
	};

	const renderUserSelection = () => {
		if (userPick === null) {
			return <p className='fw-bolder'>Game Picks</p>;
		} else {
			return <p className='fw-bolder'>You picked {userPick} to win!</p>;
		}
	};
	return (
		<div className='border rounded-lg p-12 w-4/12 mx-auto my-48'>
			<p key={props.game.GameID}>{props.game.GameID}</p>
			<p>
				{props.game.AwayTeam} @ {props.game.HomeTeam}
			</p>
			{renderUserSelection()}
			<button
				variant='primary'
				onClick={changeUserPick}
				name={`${props.game.AwayTeam}`}
				className='w-25 px-3 block'
			>
				{props.game.AwayTeam}
			</button>{' '}
			<button
				variant='primary'
				onClick={changeUserPick}
				name={`${props.game.HomeTeam}`}
				className='w-25 px-3 block'
			>
				{props.game.HomeTeam}
			</button>
		</div>
	);
}
