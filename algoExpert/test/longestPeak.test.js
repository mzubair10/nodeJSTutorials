const { longestPeak } = require("../longestPeak");
const chai = require("chai");

it("test case 1 - finds peak for positive use case ", function () {
  chai
    .expect(longestPeak([1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3, 4, 5, 0, -1, -1]))
    .to.equal(9);
});

it("test case 1 - returns 0 for negative case ", function () {
  chai
    .expect(longestPeak([1, 1, 2]))
    .to.equal(0);
});