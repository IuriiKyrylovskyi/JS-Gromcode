// task: create class Order to display & store order's data

// 1. create class Oder (id, price, dateCreated, isConfirmed, city, type)
// 2. create field id = toString(with use of Math.random())
// 3. create field isComfirmed = false
// 4. create Order.checkPrice() and if sum of order > 1000 return true if else false
// 5. create confirmOrder() => if isConfirmed === false => true
// 														dateCreated = now Date()
// 6. create isValidType() => if type = Buy or Sell return true.
// 														if else return false

class Order {
  constructor(id, price, dateCreated, isConfirmed, dateConfirmed, city, type) {
    this.id = (Math.random() * 1e10).toFixed(0);
    this.price = Number(price);
    this.dateCreated = Date(dateCreated);
    this.isConfirmed = Boolean(isConfirmed);
    this.dateConfirmed = Date(dateConfirmed);
    this.city = String(city);
    this.type = String(type);
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }
}

// ===check===
console.log((this.id = (Math.random() * 1e10).toFixed(0)));
console.log(typeof (this.id = (Math.random() * 1e10).toFixed(0)));
