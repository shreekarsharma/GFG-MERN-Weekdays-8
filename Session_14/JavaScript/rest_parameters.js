const letters = ["a", "b", "c"];
const symbols = ["!", "@", "#"];

let array = [...letters,...symbols];
console.log(array);

let [first, second, ...others] = array;
console.log(first);
console.log(second);
console.log(others);

