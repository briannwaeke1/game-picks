import Nav from '../Components/Nav';
import ProfileCard from '../Components/ProfileCard';

export default function Profile() {
	return (
		<>
			<div className='sticky top-0'>
				<Nav />
			</div>
			<div className='flex flex-col items-center justify-center min-h-screen'>
				<div className='px-6'>
					<ProfileCard />
				</div>
			</div>
		</>
	);
}
