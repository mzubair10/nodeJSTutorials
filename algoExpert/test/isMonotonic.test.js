const { isMonotonic } = require("../monotonicArray");
const chai = require("chai");

it("tests for monotonic problem ", function () {
  chai.expect(isMonotonic([1, 2, 0])).to.equal(false);
});
