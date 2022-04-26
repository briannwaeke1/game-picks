import React from 'react';
import Image from 'next/image';
import leaderboard from '../public/leaderboard.jpg';
import chat from '../public/chat.jpg';
import { AiFillStar } from 'react-icons/ai';

function FeaturesContainer() {
	return (
		<div className='my-20 flex  items-center justify-center'>
			{/* images section  */}
			<div className='flex w-11/12 flex-col items-center justify-center gap-4 p-5 md:ml-20 md:flex-row'>
				<div className='relative'>
					<Image
						src={leaderboard}
						alt='first'
						width={400}
						height={300}
						objectFit='cover'
						className='rounded-xl shadow-md'
					/>
					<div className=' flex h-auto w-full flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl'>
						<p className='mt-5 text-sm font-thin uppercase text-black'>
							Feature
						</p>
						<h2 className='text-3xl font-bold text-black'>Leaderboard</h2>
						<div className='mb-5 mt-2 flex items-center justify-center'>
							<AiFillStar className='text-yellow-400' />
							<p className=' pl-2 text-sm text-black'>Take the Crown!</p>
						</div>
					</div>
				</div>
				<div className='relative'>
					<Image
						src={chat}
						alt='second'
						width={400}
						height={300}
						objectFit='cover'
						className='rounded-xl shadow-md'
					/>
					<div className='flex h-auto flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl'>
						<p className='mt-5 text-sm font-thin uppercase text-black'>
							Feature
						</p>
						<h2 className='text-3xl font-bold text-black'>Chat</h2>
						<div className='mb-5 mt-2 flex items-center justify-center'>
							<AiFillStar className='text-yellow-400' />
							<p className=' pl-2 text-sm text-black'>
								Share Insights with Friends!
							</p>
						</div>
					</div>
				</div>
				{/* textual content */}
				<div className='flex-col items-start justify-start sm:mt-8 md:mt-0 md:ml-20'>
					<h1 className='text-5xl font-bold text-black'>Features</h1>
					<p className='mt-5 w-3/4 text-base text-black md:text-xl'>
						<span className='font-semibold'>Game</span>
						<span className='text-blue-600 font-semibold'>Picks</span> combines
						the world of social media and sports betting. "Twitter meets
						DraftKings!" - Brian
					</p>
					<div className='flex items-start justify-start gap-5'>
						<div className='my-5 flex-col'>
							<h1 className='text-4xl font-bold text-blue-600'>10+</h1>
							<p className='text-xl font-medium text-black'>Leagues</p>
						</div>
						<div className='my-5 flex-col'>
							<h1 className='text-4xl font-bold text-blue-600'>Unlimited</h1>
							<p className='text-xl font-medium text-black'>Picks</p>
						</div>
						<div className='my-5 flex-col'>
							<h1 className='text-4xl font-bold text-blue-600'>Daily</h1>
							<p className='text-xl font-medium text-black'>Games</p>
						</div>
					</div>
					<button className='h-14 w-auto rounded-xl font-bold bg-blue-600 px-8  text-white shadow-xl hover:bg-blue-500'>
						Sign Up!
					</button>
				</div>
			</div>
		</div>
	);
}

export default FeaturesContainer;
