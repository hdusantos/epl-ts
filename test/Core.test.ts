import "jest";
import {Literal} from "../src/core/Core";

test("Successfully created instance", () => {
  const lit1 = new Literal(1);
  expect(lit1).toBeInstanceOf(Literal);
});

test("Should return 1 - print method", () => {
  const lit1 = new Literal(1);
  expect(lit1.print()).toEqual("1");
});
