/**
 * Prototype (all is Object)
 * 
 */

const obj = {};
obj.foo = "bar";

console.log(obj.hasOwnProperty('foo'));

/**
 * Here we can access `hasOwnProperty` but werhe is that propety ?
 */

console.log('Object himself', obj);
console.log('Prototype of this obj', obj.__proto__);
console.log('Prototype global of Object', Object.prototype);

console.log(obj.__proto__.hasOwnProperty('hasOwnProperty'));

/**
 * You see that that was store in the prototype of Object (native by JavaScript)
 */

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
};

console.log('Object Car', Car);
console.log('Prototype of this Car', Car.__proto__);
console.log('Prototype of this Car', Car.prototype);

const myCar = new Car('Nissan', 'Micra', 2017);

console.log(myCar.hasOwnProperty);

/**
 * See that is the same for the object that we created (`Car`)
 */

console.log('Prototypes :');
console.log(myCar);
console.log(myCar.__proto__);
console.log(myCar.__proto__.__proto__);
console.log(myCar.__proto__.__proto__.__proto__);

/**
 * Now, look at basic type that you already know, and note that 
 * they also have a parent prototype as Object
 */

// Array

const baz = [ 1, 2, 3 ];
console.log('baz', baz);
console.log('baz', baz.__proto__);

// String

const faz = "Hello World!";
console.log('faz', faz);
console.log('faz', faz.__proto__);

// Number

const taz = 2019;
console.log('taz', taz);
console.log('taz', taz.__proto__);

