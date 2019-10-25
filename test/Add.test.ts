import "jest";
import {Add} from "../src/components/Add";
import {Literal} from "../src/core/Core";

test("Successfully created instance", () => {
  const lit5 = new Literal(5);
  const lit6 = new Literal(6);
  const add = new Add(lit5, lit6);
  expect(add).toBeInstanceOf(Add);
});

test("Should return 5 + 6 - print method", () => {
  const lit5 = new Literal(5);
  const lit6 = new Literal(6);
  const add = new Add(lit5, lit6);

  expect(add.print()).toEqual("5 + 6");
});
