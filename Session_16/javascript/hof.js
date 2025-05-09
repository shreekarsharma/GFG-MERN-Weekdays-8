let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(
  arr
    .filter((el) => {
      return el % 2 === 0;
    })
    .map((el) => {
      return el * 2;
    })
);
console.log(arr.reduce((a,b)=>{
    return a+b
},0));