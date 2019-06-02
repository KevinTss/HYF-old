/**
 * Classes (ES6)
 * 
 * Here is exactly the same code, but write using ES6 notation
 */

class Vehicle {

  constructor(wheels = 4) {
    this.wheels = wheels;
  }

  howManyWheels() {
    return `This ${this.brand} have ${this.wheels} wheel${this.wheels > 1 ? 's' : ''}`;
  }

}

class Car extends Vehicle {

  constructor(brand, model, year) {
    super(4);
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  move() {
    return `Wouhouuu this ${this.brand} ${this.model} is moving at 120km/h!!!`;
  }

}

class Bike extends Vehicle {

  constructor(brand, electric = false) {
    super(2);
    this.brand = brand;
    this.isElectric = electric;
  }

  greet() {
    if (this.isElectric) {
      return 'Hello, I\'m an eletric bike';
    } else {
      return 'Hello, I\'m a normal bike';
    }
  }

}

const johnSCar = new Car('Jeep', 'Compass', 2016);
const johnSBike = new Bike('Cowboy', true);

johnSCar.move();
johnSBike.greet();
console.log(johnSCar);
console.log(johnSCar.howManyWheels());
console.log(johnSBike);
console.log(johnSBike.howManyWheels());
