/*jshint es5: false */
//jshint esversion: 6
const { threeNumberSum } = require("../3numberSum");
const chai = require("chai");

it("Test Case #1", function () {
  chai.expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).to.deep.equal([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ]);
});
