import "jest";
import { EvalLiteral } from "../src/components/Eval";
import { MultiplicationEval } from "../src/components/MultiplicationEval";

test("Successfully created instance", () => {
  const lit10 = new EvalLiteral(10);
  const lit3 = new EvalLiteral(3);
  const multi = new MultiplicationEval(lit10, lit3);
  expect(multi).toBeInstanceOf(MultiplicationEval);
});

test("Should return 7 + 2 - print method", () => {
  const lit7 = new EvalLiteral(7);
  const lit2 = new EvalLiteral(2);

  const multi = new MultiplicationEval(lit7, lit2);

  expect(multi.print()).toEqual("7 * 2");
});

test("Should return number 18 - eval method", () => {
  const lit12 = new EvalLiteral(12);
  const lit2 = new EvalLiteral(2);

  const multi = new MultiplicationEval(lit12, lit2);
  expect(multi.eval()).toEqual(24);
});
