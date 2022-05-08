//jshint esversion: 6
const { spirtalTraverse } = require("../spiralTraverseV1");
const chai = require("chai");

it("Spiral Traversal Test Case 1", function () {
  chai
    .expect(
      spirtalTraverse([
        [1, 2, 3],
        [12, 13, 4],
        [11, 14, 5],
        [10, 15, 6],
        [9, 8, 7],
      ])
    )
    .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

it("Spiral Traversal Test Case 2", function () {
  chai
    .expect(spirtalTraverse([[1], [3], [2], [5], [4], [7], [6]]))
    .to.deep.equal([1, 3, 2, 5, 4, 7, 6]);
});
