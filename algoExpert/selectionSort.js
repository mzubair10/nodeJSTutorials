//jshint esversion: 6

function selectionSort(array) {
  return doSelectionSort(array);
}

function doSelectionSort(array, sortedListCount = 0, leftPointer = 0) {
	if (array.length === 1) return array;
  while (sortedListCount < array.length) {
    let smallestEltPtr = leftPointer;
    for (let iter = leftPointer + 1; iter < array.length; iter++) {
      if (array[smallestEltPtr] > array[iter]) {
        smallestEltPtr = iter;
      }
    }
    array = swap(array, smallestEltPtr, sortedListCount);
    sortedListCount++;
    leftPointer++;
  }
	return array;
}

const swap = (array, smallestEltPtr, sortedListCount) => {
  let temp = array[smallestEltPtr];
  array[smallestEltPtr] = array[sortedListCount];
  array[sortedListCount] = temp;
  return array;
};

console.log(selectionSort([8,7,6,5,4,3]));
