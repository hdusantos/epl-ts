import "jest";
import { AddEval } from "../src/components/AddEval";
import { EvalLiteral } from "../src/components/Eval";

test("Successfully created instance", () => {
  const lit9 = new EvalLiteral(9);
  const lit3 = new EvalLiteral(3);
  const add = new AddEval(lit9, lit3);
  expect(add).toBeInstanceOf(AddEval);
});

test("Should return 7 + 4 - print method", () => {
  const lit7 = new EvalLiteral(7);
  const lit4 = new EvalLiteral(4);

  const add = new AddEval(lit7, lit4);

  expect(add.print()).toEqual("7 + 4");
});

test("Should return number 18 - eval method", () => {
  const lit14 = new EvalLiteral(14);
  const lit4 = new EvalLiteral(4);

  const add = new AddEval(lit14, lit4);
  expect(add.eval()).toEqual(18);
});
