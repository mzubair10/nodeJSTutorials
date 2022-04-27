//jshint esversion: 6
function bubbleSort(array) {
  let startPtr = 0, endPtr = array.length-1, isSorted=false;
  while(startPtr <= endPtr && isSorted === false){
    isSorted = true;
		for(let iter=0; iter<=endPtr; iter++){
			if((iter !== endPtr) && (array[iter] > array[iter+1])) {
				let temp = array[iter];
				array[iter] = array[iter+1];
				array[iter+1] = temp;
				isSorted = false; 
			}
		}
		endPtr--;
  }
	return array;
}

console.log(bubbleSort([1,3,2]));

