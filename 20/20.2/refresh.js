// export
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

