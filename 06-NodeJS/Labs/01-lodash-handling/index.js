const _ = require('lodash');

const people = [
  { name: "John", age: 77 },
  { name: "Jane", age: 23 },
  { name: "Eliot", age: 42 },
  { name: "Brice", age: 65 },
  { name: "Lizzy", age: 28 }
];

// 1. sorted by age
console.log( _.sortBy(people, p => p.age) );

// 2. Find the oldest and the yougnest
console.log(`The oldest is ${_.maxBy(people, p => p.age).name} and the yougnest is ${_.minBy(people, p => p.age).name}`)
