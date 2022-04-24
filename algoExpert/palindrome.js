//jshint esversion: 6
function isPalindrome(string) {
  if (string.length === 0) return false;
  const splitString = string.split("");
  let leftSideIter = 0,
    rightSideIter = splitString.length - 1;
  while (leftSideIter < rightSideIter) {
    if (splitString[leftSideIter] === splitString[rightSideIter]) {
      leftSideIter++;
      rightSideIter--;
      continue;
    }
    return false;
  }
  return true;
}

console.log(isPalindrome("abcdcba"));
