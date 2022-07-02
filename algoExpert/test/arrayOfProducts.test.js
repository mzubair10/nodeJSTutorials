const {
    arrayOfProducts
} = require("../arrayOfProductsImproved");
const chai = require("chai");

it("test case 1 - length of 4 array ", function () {
  chai
    .expect(arrayOfProducts([5, 1, 4, 2]))
    .to.deep.equal([8,40,10,20]);
});