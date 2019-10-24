import { IExpression, Literal } from "../core/Core";

interface IEvalExpression extends IExpression {
  eval(): number;
}

class EvalLiteral extends Literal implements IExpression {
  public eval(): number {
    return this.value;
  }
}

export {IEvalExpression, EvalLiteral};
