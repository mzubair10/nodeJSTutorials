//jshint esversion: 6
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let minmaxSpeedCollection = [];
  if (fastest) {
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => b - a);
    while (redShirtSpeeds.length > 0) {
      if (redShirtSpeeds[0] >= blueShirtSpeeds[0]) {
        minmaxSpeedCollection.push(redShirtSpeeds.shift());
        blueShirtSpeeds.pop();
      } else {
				minmaxSpeedCollection.push(blueShirtSpeeds.shift());
				redShirtSpeeds.pop();
			}
    }
		return minmaxSpeedCollection.reduce((prev, curr) => prev + curr, 0);
  } else {
		redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
		while(redShirtSpeeds.length > 0){
			if (redShirtSpeeds[0] >= blueShirtSpeeds[0]) {
        minmaxSpeedCollection.push(redShirtSpeeds.shift());
        blueShirtSpeeds.shift();
      } else {
				minmaxSpeedCollection.push(blueShirtSpeeds.shift());
				redShirtSpeeds.shift();
			}
		}
		return minmaxSpeedCollection.reduce((prev, curr) => prev + curr, 0);
	} 
}

console.log(tandemBicycle([1, 2, 1, 9, 12, 3],[3, 3, 4, 6, 1, 2], false));

//fastest = true
//[5, 5, 3, 9, 2]
//[3, 6, 7, 2, 1]

//[9,5,5,3,2]
//[7,6,3,2,1]

//[5,5,3,2]
//[6,3,2,1]
