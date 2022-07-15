function riverSizes(matrix) {
	let visitedMatrix = [];
	let size = 0;
	let innerMatrix = [];
	let sizeCollection = [];
	for (let outerIter = 0; outerIter < matrix.length; outerIter++) {
		visitedMatrix.push([]);
		for (let innerIter = 0; innerIter < matrix[outerIter].length; innerIter++) {
			visitedMatrix[outerIter][innerIter] = 0;
		}
	}
	for (let outerIter = 0; outerIter < matrix.length; outerIter++) {
		for (let innerIter = 0; innerIter < matrix[outerIter].length; innerIter++) {
			let localStack = [];
			if (matrix[outerIter][innerIter] == 1 && visitedMatrix[outerIter][innerIter] == 0) {
				localStack.push([outerIter, innerIter]);
				size++;
				visitedMatrix[outerIter][innerIter] = 1;
				({
					matrix,
					visitedMatrix,
					size
				} = findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter, size, localStack));
				sizeCollection.push(size);
				size = 0;
			}
		}
	}
	return sizeCollection;
}

function findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter, size, localStack = []) {
	while (localStack.length > 0) {
		if (innerIter > 0) {
			if (visitedMatrix[outerIter][innerIter - 1] == 0 && matrix[outerIter][innerIter - 1] == 1) {
				size++;
				visitedMatrix[outerIter][innerIter - 1] = 1;
				return findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter - 1, size, localStack);
			} else if (visitedMatrix[outerIter][innerIter - 1] == 0) {
				visitedMatrix[outerIter][innerIter - 1] = 1;
			}
		}
		//right+1
		if (innerIter < matrix[outerIter].length) {
			if (visitedMatrix[outerIter][innerIter + 1] == 0 && matrix[outerIter][innerIter + 1] == 1) {
				localStack.push([outerIter, innerIter + 1]);
				size++;
				visitedMatrix[outerIter][innerIter + 1] = 1;
				return findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter + 1, size, localStack);
			} else if (visitedMatrix[outerIter][innerIter + 1] == 0) {
				visitedMatrix[outerIter][innerIter + 1] = 1;
			}
		}
		//above
		if (outerIter > 0) {
			if (visitedMatrix[outerIter - 1][innerIter] == 0 && matrix[outerIter - 1][innerIter] == 1) {
				localStack.push([outerIter - 1, innerIter])
				size++;
				visitedMatrix[outerIter - 1][innerIter] = 1;
				return findAdjacentOnes(matrix, visitedMatrix, outerIter - 1, innerIter, size, localStack);
			} else if (visitedMatrix[outerIter - 1][innerIter] == 0) {
				visitedMatrix[outerIter - 1][innerIter] = 1;
			}
		}
		//below
		if (outerIter < matrix.length - 1) {
			if (visitedMatrix[outerIter + 1][innerIter] == 0 && matrix[outerIter + 1][innerIter] == 1) {
				localStack.push([outerIter + 1, innerIter])
				size++;
				visitedMatrix[outerIter + 1][innerIter] = 1;
				return findAdjacentOnes(matrix, visitedMatrix, outerIter + 1, innerIter, size, localStack);
			} else if (visitedMatrix[outerIter + 1][innerIter] == 0) {
				visitedMatrix[outerIter + 1][innerIter] = 1;
			}
		}
		localStack.pop();
		if (localStack.length > 0) {
			[outerIter, innerIter] = localStack[localStack.length-1];
		}
	}
	return {
		matrix,
		visitedMatrix,
		size
	};
}

exports.riverSizes = riverSizes;