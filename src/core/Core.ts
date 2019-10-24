interface IExpression {
  print(): string;
}

class Literal implements IExpression {
  protected value: number;

  constructor(value: number) {
    this.value = value;
  }

  public print(): string {
    return this.value.toString();
  }
}

export {IExpression, Literal};
