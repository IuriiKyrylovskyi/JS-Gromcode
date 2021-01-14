// export
const wallet = {
  transactions: [
    { tr: 12203 },
    { tr: 1065 },
    { tr: 9512 },
    { tr: 4798 },
    { tr: 302 },
    { tr: 511 },
    { tr: 18207 },
  ],
  getMax() {
    return Math.max(...this.transactions.map(({ tr }) => tr));
  },
  getMin() {
    return Math.min(...this.transactions.map(({ tr }) => tr));
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
