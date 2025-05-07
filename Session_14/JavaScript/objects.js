// let person = {
//   name: "Shreekar",
//   age: 26,
//   isMarried: false,
//   salary: 0,
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.salary);

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let response = {
//   status: 200,
//   header: "shreekar",
//   ip: "127.1.0.1",
//   token: 4234221,
//   data: {
//     name: "Shreekar",
//     age: 26,
//     isMarried: false,
//     salary: 0,
//   },
// };

// let {
//   data: { name, age },
// } = response;
// console.log(name, age);

// const personDetails = [
//   {
//     name: "shreekar",
//     age: 26,
//     isMarried: false,
//   },
//   {
//     name: "vidush",
//     age: 25,
//     isMarried: false,
//   },
// ];

// let response2 = {
//   status: 200,
//   header: "shreekar",
//   ip: "127.1.1.0",
//   token: 343532,
//   data: {
//     name: "shreekar",
//     age: 24,
//     isMarried: false,
//     salary: 0,
//   },
//   data2: {
//     name: {
//       first: "shreekar",
//       last: "sharma",
//     },
//     age: 24,
//     isMarried: false,
//     salary: 0,
//   },
// };
// let {data:{name, age, isMarried, salary}} = response2;
// console.log(name,age,isMarried,salary);
// let {
//   data2: {
//     name: { first, last },
//     age,
//     isMarried,
//     salary,
//   },
// } = response2;
// console.log(first, last, age, isMarried, salary);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// spread operator
// let result = [...arr1, ...arr2];
// console.log(result);

// let arr3 = ["apple", "banana", "orange", "grapes"];
// rest parameter
// let [first,second,...others] = arr3;
// console.log(first,second,others);

// let obj1 = {
//   name: "shreekar",
//   age: 26,
//   isMarried: false,
//   address:{
//     city: 'bsr',
//     pincode: 203001
//   }
// };

// let obj2 = obj1;

// let obj2 = {...obj1};
// obj2.address.city = 'noida'
// console.log(obj2);
// console.log(obj1);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [...arr1];
// arr2[0] = "1";
// console.log(arr2);
// console.log(arr1);

// let details = {
//     name:"shreekar",
//     age:26,
//     isMarried:false,
//     city:'bulandshahr',
//     country:'india'
// }
// let result = JSON.stringify(details)
// console.log(result);
// console.log(typeof result);

// let result2 = JSON.parse(result);
// console.log(result2);
// console.log(typeof result2);

let person1 = {
  name: "shreekar",
  age: 26,
  isMarried: false,
  address: {
    city: "bsr",
    pincode: 203001,
  },
};

let person2 = structuredClone(person1); // better way - es6 method - modern method of deep copy
// let person2 = JSON.parse(JSON.stringify(person1));
person2.name = "shreekar sharma";
person2.address.city = "noida";
// console.log(person2);
// console.log(person1);

let response2 = {
  status: 200,
  header: "shreekar",
  ip: "127.1.1.0",
  token: 343532,
  data: {
    name: "shreekar",
    age: 24,
    isMarried: false,
    salary: 0,
  },
  data2: {
    name: {
      first: "shreekar",
      last: "sharma",
    },
    age: 24,
    isMarried: false,
    salary: 0,
  },
};

let responseCopy = structuredClone(response2);

responseCopy.data2.name,first = 'Shreekar'
console.log(responseCopy.data2.name);
console.log(response2.data2.name);
