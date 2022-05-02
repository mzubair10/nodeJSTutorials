//jshint esversion: 6
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a-b);
  arrayTwo.sort((a,b) => a-b);
  let arrayOnePtr = 0, arrayTwoPtr = 0;
  let minDifference = Number.MAX_VALUE;
  let minDifferenceCombination = [];
  while(arrayOnePtr < arrayOne.length && arrayTwoPtr < arrayTwo.length){
    const difference = Math.abs(arrayOne[arrayOnePtr] - arrayTwo[arrayTwoPtr]);
    if(difference < minDifference) { 
      minDifferenceCombination = [];
      minDifference = difference; 
      minDifferenceCombination.push(arrayOne[arrayOnePtr], arrayTwo[arrayTwoPtr]);
    }
    if(arrayOne[arrayOnePtr] < arrayTwo[arrayTwoPtr]) arrayOnePtr ++; 
    else arrayTwoPtr ++;
  }
  return minDifferenceCombination;
}

console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8]));

exports.smallestDifference = smallestDifference;