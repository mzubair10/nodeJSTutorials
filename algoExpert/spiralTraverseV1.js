//jshint esversion: 6
const spiralTraverse = (array) => {
  let totalRowCount = array.length,
    totalColCount = array[0].length;
  let topLeftPosition = [0, 0],
    topRightPosition = [0, totalColCount - 1],
    bottomLeftPosition = [totalRowCount - 1, 0],
    bottomRightPosition = [totalRowCount - 1, totalColCount - 1];
  let rowIter = 0,
    colIter = 0,
    finalOutput = [];
  while (
    topLeftPosition[0] <= bottomLeftPosition[0] &&
    topLeftPosition[1] <= topRightPosition[1]
  ) {
    while (colIter <= topRightPosition[1]) {
      finalOutput.push(array[rowIter][colIter]);
      colIter++;
    }
    rowIter++;
    colIter--;
    while (rowIter <= bottomRightPosition[0]) {
      finalOutput.push(array[rowIter][colIter]);
      rowIter++;
    }
    colIter--;
    rowIter--;
    while (
      colIter >= bottomLeftPosition[1] &&
      bottomLeftPosition[0] != topLeftPosition[0]
    ) {
      finalOutput.push(array[rowIter][colIter]);
      colIter--;
    }
    rowIter--;
    colIter++;
    while (
      rowIter > topLeftPosition[0] &&
      bottomLeftPosition[1] != bottomRightPosition[1]
    ) {
      finalOutput.push(array[rowIter][colIter]);
      rowIter--;
    }

    topLeftPosition = [topLeftPosition[0] + 1, topLeftPosition[1] + 1];
    topRightPosition = [topRightPosition[0] + 1, topRightPosition[1] - 1];
    bottomLeftPosition = [bottomLeftPosition[0] - 1, bottomLeftPosition[1] + 1];
    bottomRightPosition = [
      bottomRightPosition[0] - 1,
      bottomRightPosition[1] - 1,
    ];
    rowIter = colIter = topLeftPosition[0];
  }
  return finalOutput;
};

const arrayToBeUsed = [[1], [3], [2], [5], [4], [7], [6]];

console.log(spiralTraverse(arrayToBeUsed));

exports.spirtalTraverse = spiralTraverse;
