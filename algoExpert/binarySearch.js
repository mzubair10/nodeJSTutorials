//jshint esversion: 6
function binarySearch(array, target) {
  return doBinarySearch(array, target, 0, array.length-1);
}

const doBinarySearch = (array, target, leftPtr, rightPtr) => {
  //if (array.length === 0) return -1;
  if(leftPtr > rightPtr) return -1;
  const mid = Math.floor((leftPtr + rightPtr) / 2);
  if (target === array[mid]) return mid;
  if (target <= array[mid]) {
    rightPtr = mid-1;
    return doBinarySearch(array, target, leftPtr, rightPtr);
  } else {
    leftPtr = mid+1;
    return doBinarySearch(array, target, leftPtr, rightPtr);
  }
};

console.log(binarySearch([1, 5, 23, 111], 111));
