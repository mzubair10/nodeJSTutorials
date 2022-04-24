//jshint esversion: 6
function runLengthEncoding(string) {
  const splitString = string.split("");
  let iter = 0;
  let counter = 1;
  let finalEncodedCollection = [];
  while (splitString.length > 0) {
    if (splitString[iter] === splitString[iter + 1]) {
      counter++;
      iter++;
      continue;
    } else {
      if (counter > 9) {
        let numOf9Iterations = ~~(counter / 9);
        const reminder = counter % 9;
        while (numOf9Iterations > 0) {
          finalEncodedCollection.push(String(9) + splitString[iter]);
          numOf9Iterations--;
        }
        finalEncodedCollection.push(String(reminder) + splitString[iter]);
      } else {
        finalEncodedCollection.push(String(counter) + splitString[iter]);
      }
      splitString.splice(0, iter + 1);
      counter = 1;
      iter = 0;
    }
  }
  return finalEncodedCollection.join("");
}

console.log(runLengthEncoding("AAAAAAAAAAAABBCDDDDDEE"));//9A3A2B1C5D2E
