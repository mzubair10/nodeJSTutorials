const {
    firstDuplicateValue
} = require("../firstDuplicateValue");
const chai = require("chai");

it("returns the first duplicate value of 2 for this test ", function () {
    chai.
    expect(firstDuplicateValue([2, 1, 5, 2, 3, 3, 5]))
        .to.equal(2);
})

it("returns the first duplicate value of 3 for this test ", function () {
    chai.
    expect(firstDuplicateValue([2, 1, 5, 12, 3, 3, 5]))
        .to.equal(3);
})

it("returns the value of -1 for this test ", function () {
    chai.
    expect(firstDuplicateValue([2, 1, 5, 12, 23, 3, 35]))
        .to.equal(-1);
})