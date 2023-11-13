export class Wallet {
  constructor(
    public balance: number,
    public TransactionInput: Array<number> = [],
    public TransactionOutput: Array<number> = []
  ) {}

  addTransaction(value: number): void {
    this.balance += value;
    this.TransactionInput.push(value);
  }

  outTransaction(value: number): void {
    if (this.balance < value) {
      console.log("Saldo insuficiente");
    }

    this.balance -= value;
    this.TransactionOutput.push(value);
  }

  showBalance(): void {
    console.log(`Saldo total é: ${this.balance}`);
  }
}
