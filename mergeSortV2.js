//jshint esversion: 6
const mergeSort = (arr) => {
    if (arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2),
    leftArray = mergeSort(arr.slice(0, mid)),
    rightArray = mergeSort(arr.slice(mid));

    return merge(leftArray, rightArray);
};

const merge = (leftArray, rightArray) => {
    let concatenatedCollection = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0]< rightArray[0]) 
            {concatenatedCollection.push(leftArray.shift());}
        else {concatenatedCollection.push(rightArray.shift());}
    }
    return concatenatedCollection.concat(leftArray.slice().concat(rightArray.slice()));
};

const main = function(arr){
    return mergeSort(arr);
};

console.log(main([9, 3, 7, 5, 6, 4, 8, 2]));