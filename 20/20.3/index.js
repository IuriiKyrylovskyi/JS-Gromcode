// task: create Wallet to be able to deposit & withdraw

// 1. create & export class by Wallet name
// 2. create constructor of  Wallet with balance = 0 by default
// 3. create getBalance() and return current balance
// 4. create deposit(amount) => balance+=amount
// 5. create withdraw(amount) => balance-=amount
//  5.1 if amount > balance => console.log('No enough funds')

// export
class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log('No enough funds');
      return;
    }
    this.balance -= amount;
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
