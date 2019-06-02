/**
 * Second example
 * 
 * - We copy/paste from example 01
 * - We move the `move` function inside prototype
 * - We compare again functions
 */

/**
 * 1) Get the same code but remove the `move` function
 */
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

/**
 * 2) Add `move` function inside prototype
 */
Car.prototype.move = function() {
  console.log(`Wouhouuu this ${this.brand} ${this.model} is moving at 120km/h!!!`);
};

/**
 * 3) Create 2 instances of Car (same manipulation)
 */
const johnSCar = new Car('Jeep', 'Compass', 2016);
const janeSCar = new Car('Renault', 'Twizy', 2001);

console.log('John', johnSCar);
johnSCar.move();
console.log('Jane', janeSCar);
janeSCar.move();

/**
 * 3) Compare both functions
 */
console.log( 'Are functions really equal this time ?', johnSCar.move === janeSCar.move );

/**
 * What's happend ?
 * 
 * Now we add the function inside the prototype, and now we only store it
 * once in memory
 */