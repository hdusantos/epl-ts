import { IEvalExpression } from "./Eval";
import { AbstractMultiplication } from "./Multiplication";

class MultiplicationEval extends AbstractMultiplication implements IEvalExpression {
  protected l: IEvalExpression;
  protected r: IEvalExpression;

  constructor(l: IEvalExpression, r: IEvalExpression) {
    super();
    this.l = l;
    this.r = r;
  }

  public eval(): number {
    return this.l.eval() * this.r.eval();
  }
}

export { MultiplicationEval };
