// function sum(a,b,c){
//     return a+b+c;
// }
// let result = sum(1,2)
// console.log(result);

function a(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
var result = a(1)(2)(3);
console.log(result);
