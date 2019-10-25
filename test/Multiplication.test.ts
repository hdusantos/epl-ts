import "jest";
import { Multiplication } from "../src/components/Multiplication";
import { Literal } from "../src/core/Core";

test("Successfully created instance", () => {
  const lit3 = new Literal(3);
  const lit6 = new Literal(6);
  const multi = new Multiplication(lit3, lit6);
  expect(multi).toBeInstanceOf(Multiplication);
});

test("Should return 3 * 6 - print method", () => {
  const lit3 = new Literal(3);
  const lit6 = new Literal(6);
  const multi = new Multiplication(lit3, lit6);

  expect(multi.print()).toEqual("3 * 6");
});
