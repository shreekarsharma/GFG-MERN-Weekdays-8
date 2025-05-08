const person = {
  name: "Sarah",
  age: 29,
  city: "Seattle",
  job: "Developer",
  hobbies: {
    hobby1: 'hiking',
    hobby2: 'painting'
  },
};

// Method 1 - Better Way
const person_copy = structuredClone(person);
person_copy.age = 26;
person_copy.hobbies.hobby1 = 'trekking'
console.log(person_copy);
console.log(person);

// Method 2
// const person_copy = JSON.parse(JSON.stringify(person));
// person_copy.age = 26;
// person_copy.hobbies.hobby1 = "trekking";
// console.log(person_copy);
// console.log(person);

console.log(Object.entries(person));
console.log(Object.values(person));
console.log(Object.keys(person));
console.log("=====================================================");

console.log(Object.entries(person.hobbies));
console.log(Object.values(person.hobbies));
console.log(Object.keys(person.hobbies));