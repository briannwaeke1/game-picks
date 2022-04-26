import NextImage from 'next/image';
import useSWR from 'swr';
const TeamLogo = ({ altText, src, props }) => {
	const fetcher = url => fetch(url).then(res => res.json());

	const { data, error } = useSWR(
		'https://api.sportsdata.io/v3/nba/scores/json/teams?key=ce1cea60fa674f5ebb95719e856f2b47',
		fetcher
	);
	if (error) {
		return <p>Failed to load Data</p>;
	}
	if (!data) {
		return <p>Loading....</p>;
	}

	return (
		<ul>
			{data
				? data.map(team => {
						return (
							<div className='card'>
								<li key={team.TeamID}>
									<div className='logo'>
										<NextImage
											id={id}
											layout='fill'
											objectPosition='contain'
											src={src}
											alt={altText}
											width={100}
											height={100}
										/>
									</div>
								</li>
							</div>
						);
				  })
				: null}
		</ul>
	);
};

export default TeamLogo;
