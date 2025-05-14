let obj1 = {
  fname: "Shreekar",
  lname: "Sharma",
};
function printFullName(city, state) {
  console.log(this.fname + " " + this.lname + " from " + city + ", " + state);
}
let obj2 = {
  fname: "Vidush",
  lname: "Dixit",
};
// Call
printFullName.call(obj2, "Moradabad", "Uttar Pradesh");
// Apply
printFullName.apply(obj1,["Bulandshahr","Uttar Pradesh"]);
// Bind
let binding = printFullName.bind(obj2,"Bulandshahr", "Uttar Pradesh");
binding();