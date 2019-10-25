import { EvalLiteral } from "./components/Eval";
import { Literal } from "./core/Core";

const lit101 = Object.setPrototypeOf(new Literal(101), EvalLiteral.prototype);
const lit200 = Object.setPrototypeOf(new Literal(200), EvalLiteral.prototype);

console.log(lit101.print());
console.log(lit101.eval());
console.log(lit101 instanceof Literal);

console.log(lit200.print());
console.log(lit200.eval());
console.log(lit200 instanceof Literal);
