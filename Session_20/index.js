import figlet from "figlet";
figlet("Shreekar Sharma", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
import maths from  "./export.js";
console.log("Addition is " + maths.sum(5,10));

import isPrime from "./prime_number.js";

isPrime(23);