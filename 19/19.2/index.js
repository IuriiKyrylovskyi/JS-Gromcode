// 1. export func getOwnProps(obj)
// 2. func should return ONLY its own property array

const arr = [];
// input: {}
// outptu: []
// export
function getOwnProps(obj) {
  for (const prop in obj) {
    console.log(prop);
    console.log(typeof prop);
    console.log(obj.prop);
    console.log(typeof obj.prop);
    console.log();

    if (obj.hasOwnProperty(prop) && typeof prop !== 'function') {
      // console.log();
      // console.log(typeof obj.prop);
      arr.push(prop);
      // console.log('arr ', arr);
    }
  }
  return arr;
}

// ====== check ================
const vehicle = {
  lastName: 'Mavik',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  name: 'Argo',
  type: 'fast',
  age: 5,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
  },

  stoptMachine() {
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log('getOwnProps ', getOwnProps(ship)); // [ 'name', 'startMachine', 'stoptMachine' ]
console.log('getOwnProps type', typeof getOwnProps(ship)); // [ 'name', 'startMachine', 'stoptMachine' ]

console.log(typeof ship.startMachine);
console.log(typeof ship.name);
