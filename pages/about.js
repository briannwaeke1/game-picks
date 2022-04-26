import React from 'react';

import Image from 'next/image';
import Hero from '../public/hero.jpg';

import FeaturesContainer from '../Components/FeaturesContainer';
function AboutPage() {
	return (
		<>
			<div className=' w-screen'>
				<div className='flex h-auto w-screen items-center justify-center p-8'>
					<div className='ml-10 md:ml-20 md:w-1/2'>
						<h1 className='my-5 text-5xl font-bold text-black md:text-7xl'>
							Game<span className='text-blue-600'>Picks</span>
						</h1>
						<p>
							Your Hub For Expert Sports Data, Tracking Your Wins and Losses,
							and Sharing Your Expertise With Others!
						</p>
						<p className='text-base text-black md:text-xl'>
							GamePicks allows you to make predictions on upcoming sporting
							events! Every leage, every game! Track all your bets and go
							HEAD-2-HEAD against your friends on who has the best overall
							record!
							<br />
							GamePicks is also your one-stop-shop for game stats and
							infromation about each matchup, and also supports chat where users
							can gain additional insight and analysis on every game!
						</p>
						<div className='mt-12 flex items-start justify-start gap-5 text-center '>
							<button className=' h-14  cursor-pointer rounded-xl  bg-blue-600 px-8 font-semibold text-white hover:bg-blue-500 hover:shadow-xl'>
								Sign Up!
							</button>
						</div>
					</div>

					<div className='hidden md:block'>
						<Image
							src={Hero}
							width={900}
							height={700}
							objectFit='contain'
							alt='hero img'
						/>
					</div>
				</div>
				<FeaturesContainer />
			</div>
		</>
	);
}

export default AboutPage;
