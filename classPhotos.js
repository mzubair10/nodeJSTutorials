//jshint esversion: 6
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b) => a-b);
	blueShirtHeights.sort((a,b) => a-b);
	let differenceBetweenRedBlue = [];
	let higherOrderCollection, lowerOrderCollection;
	if(redShirtHeights[0] - blueShirtHeights[0] >= 0){
		higherOrderCollection = redShirtHeights; 
		lowerOrderCollection = blueShirtHeights;
	} else {
		higherOrderCollection = blueShirtHeights; 
		lowerOrderCollection = redShirtHeights;
	}
	for(let iter=0; iter< redShirtHeights.length; iter++){
		differenceBetweenRedBlue.push(higherOrderCollection[iter] - lowerOrderCollection[iter]);
	}
  return differenceBetweenRedBlue.some((elmt) => elmt <= 0) ? false : true;
}


console.log(classPhotos([6, 9, 2, 4, 5, 1], [5, 8, 1, 3, 4, 9]));

//[1,3,4,5,8]
//[2,4,5,6,9]