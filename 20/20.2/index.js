// task: create Ship with some inherited props

// 1. export 2 {} Vehicle & Ship
// 2. Vehicle has methods: move() => console 'obj.name is moving'
// 										 		 stop() => console 'obj.name stopped'
// 3. Ship has got ALL vehicle properties (Ship is extended by Vehicle)
// 4. Ship constructor receives 3 args (name, numberOfWheels, maxSpeed)
// 5. Ship has methods: move() => console 'obj.name lifting anchor up' + Vehicle.move()
// 									soop() => Vehicle.stop() +  console 'obj.name lifting anchor down'
// 6. obj.name = "Argo"

// export
// eslint-disable-next-line max-classes-per-file
class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

// export
class Ship extends Vehicle {
  constructor(name, maxSpeed) {
    super(name, null);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship = new Ship('Argo', 25, 17);
console.log(ship.move()); // Argo lifting anchor up Argo is moving
console.log(ship.stop()); // Argo stopped Argo lifting anchor down
console.log(ship.numberOfWheels); // Argo stopped Argo lifting anchor down
console.log(ship); // Ship { name: 'Argo', numberOfWheels: null, maxSpeed: 25 }

