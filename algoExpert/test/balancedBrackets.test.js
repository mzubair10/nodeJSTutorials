const { balancedBrackets } = require("../balancedBracket");
const chai = require("chai");

it("proper closure of brackets with optional chars", function(){
    chai.expect(balancedBrackets("(a)")).to.eq(true);
})


it("proper closure of brackets without optional chars", function(){
    chai.expect(balancedBrackets("({[]})")).to.eq(true);
})

it("improper closure of brackets", function(){
    chai.expect(balancedBrackets("([})")).to.eq(false);
})