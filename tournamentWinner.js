//jshint esversion:6

const tournamentWinner = (competitions, results) => {
	let mapOfTeamsWithScores = {};
	const flattenedCompetitions = competitions.flat();
	flattenedCompetitions.map(x => mapOfTeamsWithScores[x] = 0);
	let competitionsIterator= 0, resultsIterator = 0;
	while(competitionsIterator < competitions.length){
		const resultOfCompetition = 1 - results[resultsIterator];
		const mappingOfTeams = competitions[competitionsIterator];
		const winner = mappingOfTeams[resultOfCompetition];
		mapOfTeamsWithScores[winner] = mapOfTeamsWithScores[winner] + 3;
		competitionsIterator++;
		resultsIterator++;
	}
	const max = Object.keys(mapOfTeamsWithScores).reduce((a,b)=> mapOfTeamsWithScores[a]> mapOfTeamsWithScores[b] ? a : b, Math.min);
	return max;
};


console.log(tournamentWinner([["HTML", "C#"], ["C#","Python"],["Python", "HTML"]], [0, 0, 1]));
