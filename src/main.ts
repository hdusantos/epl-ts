import { EvalLiteral } from "./components/Eval";
import { Literal } from "./core/Core";

const lit100 = new EvalLiteral(100);

console.log(lit100.print());
console.log(lit100.eval());
