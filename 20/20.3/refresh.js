// export
class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(sum) {
    this.balance += sum;
  }

  withdraw(sum) {
    if (sum <= this.balance) {
      this.balance -= sum;
      return this.balance;
    }
    console.log(`No enough funds`);
  }
}

// ===check===

const purse = new Wallet();
console.log(purse);
purse.deposit(100);
purse.withdraw(20);
purse.withdraw(951);
console.log(purse.getBalance());
console.log(purse);
