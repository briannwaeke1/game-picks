import useSWR from 'swr';

export default function useGames() {
	fetch(
		'https://api.sportsdata.io/v3/nba/odds/json/BettingEventsByDate/current?key=ce1cea60fa674f5ebb95719e856f2b47'
	);
}
