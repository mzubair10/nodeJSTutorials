//jshint esversion: 6
const caesarCipherEncryptor = (str, key) => {
	if (key === 0) return str;
  const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];
	if (key > alphabetList.length) key = key % alphabetList.length;
  const splitStr = str.split("");
	let shiftedStrCollection = [];
	let keysToBeShifted = 0
	for(let iter=0; iter<splitStr.length; iter++){
		const positionInAlphabetList = alphabetList.indexOf(splitStr[iter]);
		if(!alphabetList[positionInAlphabetList + key]) {
			keysToBeShifted = (positionInAlphabetList + key + 1) - alphabetList.length;
			let shiftedAlphabetList = alphabetList.slice(0);
			shiftedAlphabetList.push(...alphabetList.slice(0, keysToBeShifted));
			shiftedStrCollection.push(shiftedAlphabetList[positionInAlphabetList+key]);
			continue;
		}
		shiftedStrCollection.push(alphabetList[positionInAlphabetList+key]);
	}
	return shiftedStrCollection.join("");
};

console.log(caesarCipherEncryptor("abc", 52));
