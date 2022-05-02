//jshint esversion: 6
function levenshteinDistance(str1, str2) {
  if((str1.length === 0 && str2.length === 0) || (str1.trim() === str2.trim())) return 0;
  if (str1.length > 0 && str2.length == 0) return str1.length;
  if (str2.length > 0 && str1.length == 0) return str2.length;
  let splitStr1 = str1.split("");
  let splitStr2 = str2.split("");
  splitStr1.unshift(" ");
  splitStr2.unshift(" ");
  let matrix = [];
  const maxStringLength = splitStr1.length > splitStr2.length ? splitStr1.length : splitStr2.length;
  for (let iter = 0; iter < maxStringLength; iter++) {
    matrix.push([]);
  }
  for (let str1Iter = 0; str1Iter < splitStr1.length; str1Iter++) {
    for (let str2Iter = 0; str2Iter < splitStr2.length; str2Iter++) {
      if (str1Iter == 0 && str2Iter == 0) {
        matrix[str1Iter][str2Iter] = 0;
      } else if (str1Iter == 0 && str2Iter > 0) {
        matrix[str1Iter][str2Iter] = str2Iter;
      } else if (str2Iter == 0 && str1Iter > 0) {
        matrix[str1Iter][str2Iter] = str1Iter;
      } else {
        if (splitStr1[str1Iter] == splitStr2[str2Iter]) {
          matrix[str1Iter][str2Iter] = matrix[str1Iter - 1][str2Iter - 1];
        } else {
          const valueToBeInserted = Math.min(
            matrix[str1Iter - 1][str2Iter - 1],
            matrix[str1Iter][str2Iter - 1],
            matrix[str1Iter - 1][str2Iter]
          );
          matrix[str1Iter][str2Iter] = valueToBeInserted + 1;
        }
      }
    }
  }
  return matrix[splitStr1.length-1][splitStr2.length-1];
}

console.log(levenshteinDistance("abs", "abs"));
