const NavbarSection = ({ children }) => {
	return (
		<div className='px-4 flex flex-col sm:flex-row leading-normal'>
			{children}
		</div>
	);
};

export default NavbarSection;
