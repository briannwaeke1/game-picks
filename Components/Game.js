import React, { useState } from 'react';
import Details from './Details';

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
		<div className='p-4 max-w-sm bg-white rounded-lg border shadow-md m-10 sm:p-8'>
			<h5 key={props.game.GameID} className='mb-2 text-xl font-bold text-black'>
				{props.game.AwayTeam} @ {props.game.HomeTeam}
			</h5>
			<div className='flex items-baseline text-gray-900 dark:text-white'>
				<span className='text-3xl font-semibold'>
					{props.game.AwayTeamScore} : {props.game.HomeTeamScore}
				</span>
			</div>
			<Details
				key={props.game.GameID}
				game={props.game}
				status={props.game.Status}
			/>
			<ul role='list' className='my-7 space-y-5'>
				<li className='flex space-x-3'>
					<p className='lh-lg'>Point Spread: {props.game.PointSpread}</p>
				</li>
			</ul>
			<div className='py-3'>{renderUserSelection()}</div>
			<div className='space-x-3'>
				<button
					variant='primary'
					type='button'
					className='rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black'
					onClick={changeUserPick}
					userpick={userPick}
					name={`${props.game.AwayTeam}`}
				>
					{props.game.AwayTeam}
				</button>{' '}
				<button
					variant='primary'
					size='md'
					onClick={changeUserPick}
					userpick={userPick}
					name={`${props.game.HomeTeam}`}
					type='button'
					className='rounded border-2 border-green-400 bg-white px-8 py-2 font-bold text-black hover:bg-green-400 hover:text-black focus:bg-green-400 focus:text-black'
				>
					{props.game.HomeTeam}
				</button>
			</div>
		</div>
	);
}
