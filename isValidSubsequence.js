//jshint esversion : 6
const isValidSubsequence = (array, sequence) => {
	let arrIndx = 0, seqIndx = 0;
	while(arrIndx < array.length && seqIndx < sequence.length){
		if (array[arrIndx] == sequence[seqIndx]) {
			seqIndx++;
		}
		arrIndx++;
	}
	return seqIndx == sequence.length;
};

console.log(isValidSubsequence([5,1,22,25,6,-87,-78, 16, -1,8,10], [1, 16, -11, 10]));
