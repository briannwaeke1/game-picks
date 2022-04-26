import NextImage from 'next/image';
const NavbarAvatar = ({ altText, src }) => {
	return (
		<div className='relative mx-auto sm:mr-4 h-10 w-10 flex items-center justify-start transform sm:-translate-y-2'>
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

export default NavbarAvatar;
