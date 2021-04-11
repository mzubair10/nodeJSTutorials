//jshint esversion: 6
const minimumEdit = function (string1, string2) { 
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  const splitString1 = string1.split("");
  const splitString2 = string2.split("");
  splitString1.unshift("");
  splitString2.unshift("");
  const maxStringLength =
    splitString1.length >= splitString2.length ? splitString1.length : splitString2.length;
  let matrix = [];
  for (let iter = 0; iter < maxStringLength; iter++) {
    matrix.push([]);
  }

  for (let string1Iter = 0; string1Iter < splitString1.length; string1Iter++) {
    for (
      let string2Iter = 0;
      string2Iter < splitString2.length;
      string2Iter++
    ) {
      if (string1Iter == 0 && string2Iter == 0) {
        matrix[string1Iter][string2Iter] = 0;
        continue;
      } else if (string1Iter == 0) {
        matrix[string1Iter][string2Iter] = string2Iter;
        continue;
      } else if (string2Iter == 0) {
        matrix[string1Iter][string2Iter] = string1Iter;
        continue;
      }
      if (splitString1[string1Iter] == splitString2[string2Iter]){
          const prevRow = string1Iter - 1;
          const prevCol = string2Iter - 1;
          matrix[string1Iter][string2Iter] = matrix[prevRow][prevCol];
      } else {
          const prevCol = string2Iter - 1;
          const prevRow = string1Iter - 1;
          const currentRowPrevCol = matrix[string1Iter][prevCol];
          const diagonalValue =  matrix[prevRow][prevCol];
          const topValue = matrix[prevRow][string2Iter];
          let minValue = Math.min(currentRowPrevCol, diagonalValue, topValue);
          matrix[string1Iter][string2Iter] = minValue + 1;
      }
    }
  }
  return matrix[splitString1.length-1][splitString2.length-1];
};

console.log(minimumEdit("saturday", "sunday"));
