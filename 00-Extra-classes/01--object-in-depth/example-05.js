/**
 * Inheritance
 * 
 * Let's see now that there is an obvious relationship between
 * a vehicle and car or bike
 * 
 * We can say that a car is a vehicle, and in the same way, a
 * bike is also a vehicle. For example they all both have wheels
 * 
 * - So first let's create all tree constructor functions
 */

const Vehicle = function(wheels = 4) {
  this.wheels = wheels;
  this.howManyWheels = function() {
    return `This ${this.brand} have ${this.wheels} wheel${this.wheels > 1 ? 's' : ''}`;
  }
}

const Car = function(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.move = function() {
    return `Wouhouuu this ${this.brand} ${this.model} is moving at 120km/h!!!`;
  }
}

const Bike = function(brand, electric = false) {
  this.brand = brand;
  this.isElectric = electric;
  this.greet = function() {
    if (this.isElectric) {
      console.log('Hello, I\'m an eletric bike');
    } else {
      console.log('Hello, I\'m a normal bike');
    }
  }
}

/**
 * Now theses functions are ready to be used.
 * 
 * We will put on each `child` function, a parent prototype 
 * and create a relationship
 */

Car.prototype = new Vehicle(4)
Bike.prototype = new Vehicle(2)

/**
 * Now `Car` is a child of `Vehicle` and in the same way `Bike` is also a child
 * of `Vehicle`
 * 
 * Let's use it now a create 2 instances (`johnSCar` & `johnSBike`)
 */

const johnSCar = new Car('Jeep', 'Compass', 2016);
const johnSBike = new Bike('Cowboy', true);

johnSCar.move();
johnSBike.greet();
console.log(johnSCar);
console.log(johnSCar.howManyWheels());
console.log(johnSBike);
console.log(johnSBike.howManyWheels());

/**
 * What's happend ?
 * 
 * Now you are able to use a methods from a parents function because we defined it
 * inside the prototype of the main function.
 * That's mean that the child `Car` inherit from his parent `Vehicle`
 * To that point, the child have access to all methods from the parent
 * Exactly the same for `hasOsnProperty` from the `Object` native constructor function
 */
