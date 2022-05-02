//jshint esversion: 6
function moveElementToEnd(array, toMove) {
  let leftPtr = 0,
    rightPtr = array.length - 1;
  while (leftPtr < rightPtr) {
    if (array[leftPtr] === toMove) {
      while (rightPtr > leftPtr && array[rightPtr] === toMove) {
        rightPtr--;
      }
      array = swap(array, leftPtr, rightPtr);
    }
    leftPtr ++;
  }
  return array;
}

const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
};

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));

exports.moveElementToEnd = moveElementToEnd;

//[1,2,2,2,2,2,3,4]
