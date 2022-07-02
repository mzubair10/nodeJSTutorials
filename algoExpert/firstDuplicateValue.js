function firstDuplicateValue(array) {
    let hashMapOfSeenValues = {};
    for(let iter=0; iter< array.length; iter++){
        if(hashMapOfSeenValues[array[iter]]){
            return array[iter];
        } 
        hashMapOfSeenValues[array[iter]] = 1;
    }
    return -1;
}

exports.firstDuplicateValue = firstDuplicateValue;