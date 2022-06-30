function arrayOfProducts(array) {
    let product = 1;
    let leftSubArray = [];
    let rightSubArray = [];
    let outputArray = [];
    for(let iter=0; iter< array.length; iter++){
        leftSubArray.push(1);
        rightSubArray.push(1);
    }
    for(let iter=0; iter<array.length; iter++){
        leftSubArray[iter] = product;
        product = product * array[iter];
    }
    product = 1;
    for (let iter=array.length-1; iter >= 0; iter --){
        rightSubArray[iter] = product;
        product = product * array[iter];
    }
    for (let iter=0; iter< array.length; iter++){
        outputArray.push(leftSubArray[iter] * rightSubArray[iter]);
    }
    return outputArray;
}

console.log(arrayOfProducts([5,1,4,2]));

exports.arrayOfProducts = arrayOfProducts;