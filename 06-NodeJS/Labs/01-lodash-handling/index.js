const _ = require('lodash');

const people = [
  { name: "John", age: 77 },
  { name: "Jane", age: 23 },
  { name: "Eliot", age: 42 },
  { name: "Brice", age: 65 },
  { name: "Lizzy", age: 28 }
]

console.log( _.sortBy(people, p => p.age) )
