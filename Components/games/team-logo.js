import NextImage from 'next/image';
const TeamLogo = ({ altText, src }) => {
	return (
		<div className='relative sm:mr-4 h-10 w-12 flex items-center justify-start transform sm:-translate-y-2'>
			<NextImage
				layout='fill'
				objectPosition='contain'
				src={src}
				alt={altText}
				className='rounded-full'
			/>
		</div>
	);
};

export default TeamLogo;
