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
			if (matrix[outerIter][innerIter] == 1 && visitedMatrix[outerIter][innerIter] == 0) {
				console.log("PPP size from original array ", outerIter, innerIter, size);
				size++;
				visitedMatrix[outerIter][innerIter] = 1;
				({
					matrix,
					visitedMatrix,
					size
				} = findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter, size));
				sizeCollection.push(size);
				size = 0;
			}
		}
	}
	return sizeCollection;
}

function findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter, size) {
	if (innerIter > 0) {
		console.log("moving left");
		if (visitedMatrix[outerIter][innerIter - 1] == 0 && matrix[outerIter][innerIter - 1] == 1) {
			console.log("size increased ", outerIter, innerIter, matrix[outerIter][innerIter], visitedMatrix[outerIter][innerIter], "Size -- ", size);
			size++;
			visitedMatrix[outerIter][innerIter - 1] = 1;
			return findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter - 1, size);
		} else if (visitedMatrix[outerIter][innerIter - 1] == 0) {
			visitedMatrix[outerIter][innerIter - 1] = 1;
		}
	}
	//right+1
	if (innerIter < matrix[outerIter].length) {
		console.log("moving right ");
		if (visitedMatrix[outerIter][innerIter + 1] == 0 && matrix[outerIter][innerIter + 1] == 1) {
			console.log("size increased ", outerIter, innerIter, matrix[outerIter][innerIter], visitedMatrix[outerIter][innerIter], "Size -- ", size);
			size++;
			visitedMatrix[outerIter][innerIter + 1] = 1;
			return findAdjacentOnes(matrix, visitedMatrix, outerIter, innerIter + 1, size);
		} else if (visitedMatrix[outerIter][innerIter + 1] == 0) {
			visitedMatrix[outerIter][innerIter + 1] = 1;
		}
	}
	//above
	if (outerIter > 0) {
		console.log("moving above");
		if (visitedMatrix[outerIter - 1][innerIter] == 0 && matrix[outerIter - 1][innerIter] == 1) {
			console.log("size increased ", outerIter, innerIter, matrix[outerIter][innerIter], visitedMatrix[outerIter][innerIter], "Size -- ", size);
			size++;
			visitedMatrix[outerIter - 1][innerIter] = 1;
			return findAdjacentOnes(matrix, visitedMatrix, outerIter - 1, innerIter, size);
		} else if (visitedMatrix[outerIter - 1][innerIter] == 0) {
			visitedMatrix[outerIter - 1][innerIter] = 1;
		}
	}
	//below
	if (outerIter < matrix.length - 1) {
		console.log("moving down");
		if (visitedMatrix[outerIter + 1][innerIter] == 0 && matrix[outerIter + 1][innerIter] == 1) {
			console.log("size increased ", outerIter, innerIter, matrix[outerIter][innerIter], visitedMatrix[outerIter][innerIter], "Size -- ", size);
			size++;
			visitedMatrix[outerIter + 1][innerIter] = 1;
			return findAdjacentOnes(matrix, visitedMatrix, outerIter + 1, innerIter, size);
		} else if (visitedMatrix[outerIter + 1][innerIter] == 0) {
			visitedMatrix[outerIter + 1][innerIter] = 1;
		}
	}
	return {
		matrix,
		visitedMatrix,
		size
	};
}

console.log(
	riverSizes([
		// [1, 0, 0, 1, 0],
		// [1, 0, 1, 0, 0],
		// [0, 0, 1, 0, 1],
		// [1, 0, 1, 0, 1],
		// [1, 0, 1, 1, 0]
		[1, 1, 0],
		[1, 0, 1],
		[1, 1, 1],
		[1, 1, 0],
		[1, 0, 1],
		[0, 1, 0],
		[1, 0, 0],
		[1, 0, 0],
		[0, 0, 0],
		[1, 0, 0],
		[1, 0, 1],
		[1, 1, 1]
	]))