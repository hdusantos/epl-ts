import "jest";
import { EvalLiteral } from "../src/components/Eval";

test("Successfully created instance", () => {
  const lit1 = new EvalLiteral(1);
  expect(lit1).toBeInstanceOf(EvalLiteral);
});

test("Should return 1 - print method", () => {
  const lit1 = new EvalLiteral(1);
  expect(lit1.print()).toEqual("1");
});

test("Should return number 4 - eval method", () => {
  const lit4 = new EvalLiteral(4);
  expect(lit4.eval()).toEqual(4);
});
