function mergeOverlappingIntervals(array) {
    //sort the arrays w.r.t start values
    //start collecting inputs to output collection, overlapping them as you go
    let sortedCollection = [];
    array.sort((a, b) => a[0] - b[0]);
    for (let iter = 1; iter < array.length; iter++) {
        if (array[iter - 1][1] >= array[iter][1]) {
            array.splice(iter, 1)
            iter--;
            continue;
        }
        if (array[iter - 1][1] >= array[iter][0]) {
            array[iter - 1][1] = array[iter][1];
            array.splice(iter, 1)
            iter--;
            continue;
        }
    }
    return array;
}

exports.mergeOverlappingIntervals = mergeOverlappingIntervals;