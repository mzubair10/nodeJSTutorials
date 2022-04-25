//jshint esversion: 6
function productSum(array, multiplier = 1) {
	let sum = 0;
	for(let iter=0; iter< array.length; iter++){
		if(Array.isArray(array[iter])) {
			sum = sum + productSum(array[iter], multiplier +1);
		}else{
			sum = sum + array[iter];
		}
	}
	return sum * multiplier;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
