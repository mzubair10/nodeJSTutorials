//Substring search Knuth-Moriss-Pratt algorithm
//jshint esversion: 6
const buildLPSMatrix = function (pattern) {
  const spiltPatternArray = pattern.split("");
  let mapOfCharacterToValue = [];
  const firstChar = spiltPatternArray[0];
  const obj = {};
  obj[firstChar] = 0;
  mapOfCharacterToValue.push(obj);
  let counter = 0;
  let tempValue;
  for (let iter = 1; iter < spiltPatternArray.length; iter++) {
    if (spiltPatternArray[iter] != spiltPatternArray[counter] && counter == 0) {
      const valueToBePushed = spiltPatternArray[iter];
      const obj = {};
      obj[valueToBePushed] = 0;
      mapOfCharacterToValue.push(obj);
    } else if (
      spiltPatternArray[iter] != spiltPatternArray[counter] &&
      counter > 0
    ) {
      const objectToBeChecked = mapOfCharacterToValue[counter - 1];
      const [_, value] = Object.entries(objectToBeChecked)[0];
      tempValue = value;
      counter = value;
      while (
        counter != 0 &&
        spiltPatternArray[counter] != spiltPatternArray[iter]
      ) {
        const [_, value] = Object.entries(mapOfCharacterToValue[counter])[0];
        tempValue = value;
        counter = value;
      }
      if (spiltPatternArray[counter] == spiltPatternArray[iter]) {
        const valueToBePushed = spiltPatternArray[iter];
        const newValue = counter + 1;
        const obj = {};
        obj[valueToBePushed] = newValue;
        mapOfCharacterToValue.push(obj);
        counter += 1;
      } else if (
        spiltPatternArray[iter] != spiltPatternArray[counter] &&
        counter == 0
      ) {
        const key = spiltPatternArray[iter];
        const obj = {};
        obj[key] = 0;
        mapOfCharacterToValue.push(obj);
      }
    } else if (spiltPatternArray[iter] == spiltPatternArray[counter]) {
      const valueToBePushed = counter + 1;
      const key = spiltPatternArray[iter];
      const obj = {};
      obj[key] = valueToBePushed;
      mapOfCharacterToValue.push(obj);
      counter += 1;
    } else if (
      spiltPatternArray[iter] != spiltPatternArray[counter] &&
      counter == 0
    ) {
      const key = spiltPatternArray[iter];
      const obj = {};
      obj[key] = 0;
      mapOfCharacterToValue.push(obj);
    }
  }
  return mapOfCharacterToValue;
};

const isStringMatch = function (originalString, patternToBeVerified) {
  if (originalString.length == 0 || patternToBeVerified.length == 0){
    return false;
  }
  const lpsMatrix = buildLPSMatrix(patternToBeVerified);
  const dummyObject = { 0: 0 };
  lpsMatrix.unshift(dummyObject);
  let counter = 0;
  for (let stringIter = 0; stringIter < originalString.length; stringIter++) {
    const [key, _] = Object.entries(lpsMatrix[counter + 1])[0];
    if (originalString[stringIter] == key) {
      counter += 1;
      if (counter+1 == lpsMatrix.length) {
        return true;
      }
    } else {
      while (counter != 0) {
        const [_, nextCounterValue] = Object.entries(lpsMatrix[counter])[0];
        counter = nextCounterValue;
        const [key] = Object.entries(lpsMatrix[counter + 1])[0];
        if (originalString[stringIter] == key) {
          counter += 1;
          break;
        }
      }
    }
  }
  if (counter + 1 == lpsMatrix.length) {
    return true;
  }
  return false;
};

console.log(isStringMatch("ababcabcababab", "abc"));