const { kadanesAlgorithm } = require("../maxSubArray");
const chai = require("chai");

it("test case 1 - only negative numbers ", function () {
  chai
    .expect(kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]))
    .to.equal(-1);
});

it("test case 2 - mix of both positive and negative numbers ", function () {
  chai
    .expect(kadanesAlgorithm([10, 9, -3, -4, 1]))
    .to.equal(19);
});
