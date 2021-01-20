// 1. export func getOwnProps(obj)
// 2. func should return ONLY its own property array

const arr = [];

// input: {}
// outptu: []
// export
function getOwnProps(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof prop === 'string') {
      arr.push(prop);
    }
  }
  return arr;
}

// ====== check ================
const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
  },

  stoptMachine() {
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log(getOwnProps(ship)); // [ 'name', 'startMachine', 'stoptMachine' ]

console.log(typeof ship.startMachine);
console.log(typeof ship.name);
