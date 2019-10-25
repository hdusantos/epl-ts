import { IExpression } from "../core/Core";

abstract class AbstractMultiplication {
  protected abstract l: IExpression;
  protected abstract r: IExpression;

  public print(): string {
    return `${this.l.print()} * ${this.r.print()}`;
  }
}

class Multiplication extends AbstractMultiplication {
  protected l: IExpression;
  protected r: IExpression;
  constructor(l: IExpression, r: IExpression) {
    super();
    this.l = l;
    this.r = r;
  }
}

export { AbstractMultiplication, Multiplication };
