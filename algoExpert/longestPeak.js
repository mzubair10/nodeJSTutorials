function longestPeak(array) {
  if (array.length < 3) return 0;
  let peakElements = [];
  let tmpSequence = [];
  let finalSequence = [];
  for(let iter=1; iter< array.length; iter++) {
    if ((array[iter] > array[iter-1]) && (array[iter] > array[iter+1])) {
      peakElements.push(array[iter]);
      tmpSequence.push(array[iter]);
      let chkPoint = iter;
      while(array[chkPoint-1] < array[chkPoint]){
        chkPoint -=1;
        tmpSequence.push(array[chkPoint]);
      }
      chkPoint = iter;
      while(array[chkPoint+1] < array[chkPoint]){
        chkPoint +=1;
        tmpSequence.push(array[chkPoint]);
      }
      finalSequence.push(tmpSequence);
      tmpSequence = [];
    }
  }
  return finalSequence.reduce((prev, curr) => {
    console.log("TTT ", prev, curr);
    if (prev < curr.length) {
      prev = curr.length;
    }
    return prev; 
  }, 0);
}

console.log(longestPeak([1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]));

exports.longestPeak = longestPeak;