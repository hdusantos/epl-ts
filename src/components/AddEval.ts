import { AbstractAdd } from "./Add";
import { IEvalExpression } from "./Eval";

class AddEval extends AbstractAdd implements IEvalExpression {
  protected l: IEvalExpression;
  protected r: IEvalExpression;

  constructor(l: IEvalExpression, r: IEvalExpression) {
    super();
    this.l = l;
    this.r = r;
  }

  public eval(): number {
    return this.l.eval() + this.r.eval();
  }
}

export { AddEval };
