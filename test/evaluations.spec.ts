// tests/calculator.spec.tx
import { assert, should } from "chai";
import { add, exercise1,exercise2, exercise3, exercise4, exercise5} from "../src/exercises"

should();

describe("Evaluation Tests", () => {
      it("add method should return 5 when 2 is added to 3", () => {
      const result = add(2, 3);
      assert.equal(result, 5);
   }); 
   it('exercise1 should work as per requirement spec', () => {
      assert.equal(exercise1(), 100);
   });
   it('exercise2 should work as per spec', () => {
      const result = exercise2("start","end");
      assert.equal(result,"startHELLOend")
   });
   it('Exercise 3 should work as per spec', () => {
      const result = exercise3("666666");
      assert.equal(result,6);
   });
   it('Exercise 4 works as per the spec', () => {
      const result = exercise4();
      assert.isTrue(result > 0 && result < 5  );
   });
   it('Exercise 5 works OK', () => {
      const actual = exercise5("result");
      assert.equal(actual,"tluser")
   });
 
});