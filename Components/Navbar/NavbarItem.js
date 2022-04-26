import Link from 'next/link';
const NavbarItem = ({ text, url, active }) => {
	return (
		<Link passHref href={url}>
			<a
				className={`border-b-4 sm:border-b-4 ${
					active
						? 'border-green-400 hover:border-green-500'
						: 'border-transparent hover:border-green-400'
				} px-4`}
			>
				{text}
			</a>
		</Link>
	);
};

export default NavbarItem;
