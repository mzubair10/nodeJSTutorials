//jshint esversion: 6
function insertionSort(array) {
  let startPtr = 0;
  for (let iter = 1; iter < array.length; iter++) {
    {
      if (array[startPtr] > array[iter]) {
        let temp = array[startPtr];
        array[startPtr] = array[iter];
        array[iter] = temp;

        while (iter > 1 && startPtr >= 0) {
          if (array[startPtr] < array[startPtr - 1]) {
            let temp = array[startPtr];
            array[startPtr] = array[startPtr - 1];
            array[startPtr - 1] = temp;
            startPtr--;
          } else {
            break;
          }
        }
      }
      startPtr = iter;
    }
  }
  return array;
}
console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));

//5,8,2,9,5,6,3

//2,5,8,9,5,6,3
