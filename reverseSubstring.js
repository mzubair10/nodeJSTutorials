//jshint esversion: 6

const reverseSubString = (string, positions) => {
  const splitString = string.split("").slice(positions[0], positions[1] + 1);
  let start = 0,
    end = splitString.length - 1;
  while (start < end) {
    const temp = splitString[start];
    splitString[start] = splitString[end];
    splitString[end] = temp;
    start++;
    end--;
  }
	return([string.slice(0, positions[0]), ...splitString, string.slice(positions[1]+1)].join(''));
};

console.log(reverseSubString("mohamed", [5, 8]));
