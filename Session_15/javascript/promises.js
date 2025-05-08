// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let result = true;
//     if (result) {
//       resolve("resolved");
//     } else {
//       reject("rejected");
//     }
//   }, 2000);
// });

// promise
//   .then((res) => {
//     console.log("Promise then");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
// fetched, recieved, processes, print data

// promise definition
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = true;
//       if (data) {
//         resolve("Resolved");
//       } else {
//         reject("Rejected");
//       }
//     }, 2000);
//   });
// }

// fetchData()
//   .then(() => {
//     setTimeout(() => {
//       console.log("Data is fetched");
//     }, 2000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Data is recieved");
//     }, 4000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Data is processed");
//     }, 6000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Data is printed");
//     }, 8000);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     setTimeout(() => {
//       console.log("Task completed");
//     }, 10000);
//   });

// let promise = Promise.resolve("success");
// let promise = Promise.reject("success").catch((err)=>{console.log(err);
// });
// console.log(promise);

// Promises methods
const promise1 = Promise.resolve("first");
const promise2 = new Promise(resolve=>setTimeout(()=>resolve("second"),2000))
const promise3 = Promise.reject("third")

// Promise.all()
Promise.allSettled([promise1,promise2,promise3]).then((values)=>{console.log(values);
}).catch((err)=>{console.log(err);
})

// Promise.race()
Promise.race([promise1,promise2,promise3]).then(result=>{console.log(result);
})

// Promise.any()