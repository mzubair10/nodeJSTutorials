//jshint esversion: 6
function isMonotonic(array) {
  if (array.length < 3) return true;
  let isIncreasing = false, ptr = 0, allEltsEqual = true;
  while(ptr < array.length){
    if(array[ptr] < array[ptr + 1]) {
      isIncreasing = true;
      allEltsEqual = false;
      break;
    } else if (array[ptr] > array[ptr + 1]){
      isIncreasing = false;
      allEltsEqual = false;
      break;
    }
    ptr = ptr+1;
  }
  if (allEltsEqual === true) return true;
  let lastPtr = array.length-1;
  while (lastPtr > 1) {
    if (isIncreasing && array[lastPtr] >= array[lastPtr - 1]) {
      lastPtr--;
      continue;
    } else if (!isIncreasing && array[lastPtr] <= array[lastPtr - 1]) {
      lastPtr--;
      continue;
    }
    return false;
  }
  return true;
}

exports.isMonotonic = isMonotonic;

console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]));


  // for (let iter = 2; iter < array.length; iter++) {
  //   if (isIncreasing) {
  //     if(array[iter] <= (array[iter+1] || Number.MAX_VALUE)) continue;
  //     else return false;
  //   } else {
  //     if(array[iter] >= (array[iter+1] || Number.MIN_VALUE)) continue;
  //     else return false;
  //   }
  // }

  // while (ptr < array.length) {
  //   if (array[ptr] < array[ptr + 1]) {
  //     isIncreasing = true;
  //   } else {
  //     isIncreasing = false;
  //   }
  //   areAllEltsEqual = false;
  //   break;
  // }