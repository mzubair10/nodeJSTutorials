function addNumbersInArray(arr){
    if (arr.length == 0) {
        return 0;
    }
    return computeSum(0, arr);
}

function computeSum(sumComputed, arr){
    if (arr.length == 1){
        return (sumComputed + arr.shift());
    }
    else {
        let modifiedSum = sumComputed + arr.shift();
        return computeSum(modifiedSum, arr);
    }
}