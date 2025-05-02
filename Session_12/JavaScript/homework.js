//console.log(d);
var a = 19;
let b = 30;
//console.log(c);
const c = 40;
function outside() {
  var a = 30;
  let b = 40;
  console.log(a);
  console.log(b);
  function inside() {
    var a = 50;
    let b = 60;
    console.log(a);
    console.log(b);
  }
  inside();
}
outside();
var d = 'vikas';
console.log(d);
console.log(a);
console.log(b);
console.log(c);
