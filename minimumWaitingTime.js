//jshint esversion: 6
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
	let timeCollection = [];
  for (let iter=1; iter< queries.length; iter++){
		let timeTakenTillCurrentIter = queries.slice(0, iter).reduce((prev, curr) => prev + curr, 0);
		timeCollection.push(timeTakenTillCurrentIter);
	}
	return timeCollection.reduce((prev, curr) => prev + curr, 0);
}

console.log(minimumWaitingTime([5,1,4]));
//[3,2,1,2,6]

//1, 2, 2, 3, 6 = 1 + 3 + 5 + 8 = 17 seconds

// 6, 3, 3, 2, 2, 1 = 17 seconds

//[1,4,5] = 6 seconds
//[5,1,4] = 11 seconds
//[5,4,1] = 9 seconds
