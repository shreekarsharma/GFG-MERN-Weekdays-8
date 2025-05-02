// Primitive - Stack
// var a = 12;
// var b = a;
// b = 23;
// console.log(b);
// console.log(a);

// Non Primitive - Heap
// var person = {
//   name: "shreekar",
//   age: 26,
//   isWorking: false,
// };
// var obj = person;
// console.log(person);
// obj.name = "shreekar sharma";
// console.log(person);
// console.log(obj);

// Primitive Data Types - String, Number, Boolean, Null
let name = "Shreekar Sharma";
let age = 26;
let isWorking = false;
let nullVar = null;
let undefinedVar = undefined;

// Non Primitive
// Object
let Person = {
  name: "Shreekar Sharma",
  age: 26,
  learning: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  isWorking: false,
};
// Array
let numArray = [1, 2, 3, 4, 5];
let numberArray = new Array(1, 2, 3, 4, 5);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isWorking);
console.log(typeof nullVar);
console.log(typeof undefinedVar);

console.log(typeof Person);
console.log(typeof numArray);
console.log(typeof numberArray);

// Functions
function Show(){
    console.log('Named Function');
}
Show();

let Display = function(){
    console.log('Anonymous Function');   
}
let result = Display();

let addition = () => console.log(1+2);
var preview = addition()

console.log(typeof Show);
console.log(typeof Display);
console.log(typeof addition);
