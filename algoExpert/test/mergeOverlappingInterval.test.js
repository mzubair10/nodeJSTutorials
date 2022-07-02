const {
    mergeOverlappingIntervals
} = require("../mergeOverlappingInterval");
const chai = require("chai");

it("positive use case 1", function () {
    chai
        .expect(mergeOverlappingIntervals([
            [1, 2],
            [3, 5],
            [4, 7],
            [6, 8],
            [9, 10]
        ]))
        .to.deep.equal(
            [
                [1, 2],
                [3, 8],
                [9, 10]
            ]
        )
})
it("postive use case 2 with duplicates ", function () {
    chai
        .expect(mergeOverlappingIntervals(
            [
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 0],
                [0, 1]
            ]
        ))
        .to.deep.equal(
            [
                [0, 1]
            ]
        )
})