const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'odds.p.rapidapi.com',
		'X-RapidAPI-Key': '41543edc69msh003807b323e3bbep105e27jsn879fc87bea11'
	}
};

fetch(
	'https://odds.p.rapidapi.com/v4/sports/basketball_nba/odds?regions=us&oddsFormat=american&markets=h2h%2Cspreads&dateFormat=iso',
	options
)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
