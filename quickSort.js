function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {

    while (arr[i] <= pivot) {
      i++;

    }
    while (arr[j] > pivot) {
      j--;
    }


    if (i < j) {
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  const temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}

function quickSort(arr1) {
  let arr = arr1;
  arr.push(Number.POSITIVE_INFINITY);
  const low = 0,
    high = arr.length - 1;
  let returnedResult = doQuickSort(arr, low, high);
  returnedResult.pop();
  console.log(returnedResult);
}

function doQuickSort(arr, low, high) {
  if (low < high) {
    const newPartition = partition(arr, low, high);
    doQuickSort(arr, low, newPartition);
    doQuickSort(arr, newPartition + 1, high);
  }
  return arr;
}
