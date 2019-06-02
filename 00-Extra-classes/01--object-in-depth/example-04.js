/**
 * Prototype chain
 * 
 */

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.moveSlow = function() {
    console.log(`Wouhouuu this ${this.brand} ${this.model} is moving at 50km/h!!!`);
  }
}

Car.prototype.move = function() {
  console.log(`Wouhouuu this ${this.brand} ${this.model} is moving at 120km/h!!!`);
}

const johnSCar = new Car('Jeep', 'Compass', 2016);

johnSCar.move();
johnSCar.moveSlow();
console.log(johnSCar.hasOwnProperty('brand'));

/**
 * What's happend ?
 * 
 * You see that johnSCar have acces to all properties (or methods) 
 * from his parent and grand-parent recursively
 */

function Vehicle(wheels) {
  this.wheels = wheels;
  this.howManyWheels = function() {
    console.log(`I have ${this.wheels} wheel${this.wheels > 1 ? 's' : ''}`);
  }
}

Vehicle.prototype.howManyWheels = function() {
  console.log(this.wheels);
}

const myVehicle = new Vehicle(4);

myVehicle.howManyWheels();

/**
 * What's happend
 * 
 * JavaScript search the key inside object you create,
 * if he doesn't find it, he gonna check inside the prototype
 * 
 * PROTOTYPE CHAIN
 * myVehicle --> Vehicle.prototype --> Object.prototype --> null
 */