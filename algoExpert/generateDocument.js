//jshint esversion: 6
// function generateDocument(characters, document) {
//   if (document === "") return true;
//   let mappingOfCharToCount = {};
// 	let mappingOfDocToCount = {};
//   characters.split("").reduce((_, curr) => {
// 		mappingOfCharToCount[curr] = (mappingOfCharToCount[curr] || 0) + 1;
//   },"");
// 	document.split("").reduce((_, curr) => {
// 		mappingOfDocToCount[curr] = (mappingOfDocToCount[curr] || 0) + 1;
// 	}, "");
// 	for(let iter = 0; iter< Object.keys(mappingOfDocToCount).length; iter++){
// 		const docKey = Object.keys(mappingOfDocToCount)[iter];
// 		const charKey = Object.keys(mappingOfCharToCount).find(x => x === docKey);
// 		if(!charKey || (mappingOfCharToCount[charKey] < mappingOfDocToCount[docKey])) return false;
// 	}
// 	return true;
// }

function generateDocument(characters, document){
	for(const character of document){
		const documentCount = getCount(character, document);
		const charCount = getCount(character, characters);
		if (documentCount > charCount) return false;
	}
	return true;
}

function getCount(character, collection){
	let count = 0;
	for(const char of collection){
		if (char == character){ 
			count++;
		}
	}
	return count;
}

console.log(
  generateDocument("aheaollabbhb", "hello")
);
