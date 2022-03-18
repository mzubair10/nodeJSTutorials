//jshint esversion: 6
const twoNumberSum = (array, targetSum) => {
	array.sort((a,b) => a-b);
  let firstPointer = 0,
		lastPointer = array.length-1;
	while(firstPointer != lastPointer){
		let sum = array[firstPointer] + array[lastPointer];
		if( sum == targetSum){
			return [array[firstPointer], array[lastPointer]];
		} else if (sum < targetSum) {
			firstPointer++;
		} else {
			lastPointer --;
		}
	}
	return [];
};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 18));


