// 1. export 2 {} vehicle & ship
// 2. vehicle methods: move() => console 'obj.name is moving'
// 										 stop() => console 'obj.name stopped'
// 3. ship has got ALL vehicle properties
// 4. ship methods: startMachine() => console 'obj.name lifting anchor up' + ship.move()
// 									stopMachine() => ship.stop() +  console 'obj.name lifting anchor down'
// 5. obj.name : "Argo"

// export
const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
// export
const ship = {
  name: 'Argo',
  startMachine() {
    if (!this.move()) {
      console.log(`${this.name} lifting anchor up`);
    }
  },
  stoptMachine() {
    if (this.stop) {
      console.log(`${this.name} lifting anchor down`);
    }
  },
};

Object.setPrototypeOf(ship, vehicle);
