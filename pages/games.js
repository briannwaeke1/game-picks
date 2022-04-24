import React from 'react';
import Nav from '../Components/Nav';
import GameCard from '../Components/GameCard';

export default function Games() {
	return (
		<>
			<div className='sticky top-0'>
				<Nav />
			</div>
			<GameCard />
		</>
	);
}
