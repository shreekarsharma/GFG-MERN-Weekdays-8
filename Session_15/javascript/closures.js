function outerFunction() {
  let count = 0;
  function middleFunction() {
    function innerFunction(){
        count++;
        console.log(count);
        
    }
    innerFunction();
  }
  return middleFunction;
}
let result = outerFunction();
console.log(result);
result()