const { moveElementToEnd } = require("../moveElementToEnd");
const chai = require("chai");

it("test case for moving elements to end", function () {
  chai
    .expect(moveElementToEnd([3, 1, 2, 4, 5], 3))
    .to.deep.equal([5, 1, 2, 4, 3]);
});
