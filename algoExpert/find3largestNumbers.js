//jshint esversion : 6
function findThreeLargestNumbers(array) {
  let largestElementCollection = [];
  while (largestElementCollection.length < 3) {
    const maxElementInArray = array.reduce((prev, curr) =>
      prev > curr ? prev : curr
    );
		largestElementCollection.unshift(maxElementInArray);
		array.splice(array.indexOf(maxElementInArray), 1);
  }
	return largestElementCollection;
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
