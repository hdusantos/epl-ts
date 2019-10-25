import { IExpression } from "../core/Core";

abstract class AbstractAdd {
  protected abstract l: IExpression;
  protected abstract r: IExpression;

  public print(): string {
    return `${this.l.print()} + ${this.r.print()}`;
  }
}

class Add extends AbstractAdd {
  protected l: IExpression;
  protected r: IExpression;
  constructor(l: IExpression, r: IExpression) {
    super();
    this.l = l;
    this.r = r;
  }
}

export { AbstractAdd, Add };
