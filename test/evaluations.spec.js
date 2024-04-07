"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/calculator.spec.tx
var chai_1 = require("chai");
var exercises_1 = require("../src/exercises");
(0, chai_1.should)();
describe("Evaluation Tests", function () {
    it("add method should return 5 when 2 is added to 3", function () {
        var result = (0, exercises_1.add)(2, 3);
        chai_1.assert.equal(result, 5);
    });
    it('exercise1 should work as per requirement spec', function () {
        chai_1.assert.equal((0, exercises_1.exercise1)(), 100);
    });
    it('exercise2 should work as per spec', function () {
        var result = (0, exercises_1.exercise2)("start", "end");
        chai_1.assert.equal(result, "startHELLOend");
    });
    it('Exercise 3 should work as per spec', function () {
        var result = (0, exercises_1.exercise3)("666666");
        chai_1.assert.equal(result, 6);
    });
    it('Exercise 4 works as per the spec', function () {
        var result = (0, exercises_1.exercise4)();
        chai_1.assert.isTrue(result > 0 && result < 5);
    });
    it('Exercise 5 works OK', function () {
        var actual = (0, exercises_1.exercise5)("result");
        chai_1.assert.equal(actual, "tluser");
    });
});
