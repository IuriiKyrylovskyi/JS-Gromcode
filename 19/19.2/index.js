// 1. export func getOwnProps(obj)
// 2. func should return ONLY its own property array

// input: {}
// outptu: []
// export
function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    // console.log(obj[prop]);
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      // console.log(typeof obj[prop]);
      arr.push(prop);
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
  abroad: false,
  capacity: null,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
  },

  stoptMachine() {
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log('getOwnProps ', getOwnProps(ship)); // [ 'name', 'type', 'age' ]
// console.log('getOwnProps type', typeof getOwnProps(ship)); // object

// console.log(typeof ship.startMachine);
// console.log(typeof ship.name);
