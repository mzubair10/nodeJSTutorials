//jshint esversion: 6
const { smallestDifference } = require("../smallestDifference");
const chai = require("chai");

it("test cases for smallest difference", function () {
  chai.expect(
    smallestDifference(
      [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
      [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
    )
  ).to.deep.equal([-123, -124]);
});
