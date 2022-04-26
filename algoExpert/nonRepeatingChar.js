//jshint esversion:6
function firstNonRepeatingCharacter(string) {
	const visitedCharacters = {};
	if(string.length == 1) return 0;
  for (const c of string) {
		if (visitedCharacters[c]) continue; 
    const count = countOccurrence(c, string);
    if (count == 1) return string.indexOf(c);
		else visitedCharacters[c] = count;
  }
  return -1;
}

function countOccurrence(char, string) {
  let counter = 0;
  for (const c of string) {
    if (c == char) counter++;
  }
  return counter;
}

console.log(firstNonRepeatingCharacter("faadabcbbebdf"));
