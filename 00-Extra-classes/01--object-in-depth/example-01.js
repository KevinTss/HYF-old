/**
 * First example
 * 
 * - We first create a function who create a car
 * - We use this function to create 2 instances of car
 * - When you compare the function inside
 */

/**
 * 1) Car function creation
 */
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.move = function() {
    console.log(`Wouhouuu this ${this.brand} ${this.model} is moving at 120km/h!!!`);
  };
}

/**
 * 2) Create 2 instances of Car
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
console.log( 'Are functions really equal ?', johnSCar.move === janeSCar.move );
console.log( 'Let\'s compare same function -->', johnSCar.move === johnSCar.move );

/**
 * What's happend ?
 * 
 * We create 2 object with 2 different data, so we basically 
 * use the same functionnality but we store that 2 times in memory
 * 
 * Worst, we store that function for each instace that we create,
 * if facebook create a instance for each user they have, you image how many place
 * it take in memory ?
 */