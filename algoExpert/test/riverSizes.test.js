const {
    riverSizes
} = require("../riverSizesOpt");
const chai = require("chai");

it("returns positive number results for a proper use case", function () {
    chai.expect(riverSizes([
            [1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0]
        ]))
        .to.have.members(
            [
                1, 2, 2, 2, 5
            ]
        )
})