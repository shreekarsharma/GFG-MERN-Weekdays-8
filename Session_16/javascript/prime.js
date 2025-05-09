let arr = [42, 7, 89, 23, 56, 15, 68, 34, 91, 10];
let primeArr = []
console.log(arr.filter((el) => {
    let isPrime = true;
    for (let i = 2; i < el; i++) {
      if (el % i === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      return el    
    }
  }).map((el)=>{
    return el*2;
  }).reduce((el,acc)=>{
    return el+acc
  },0));


