// function greet(name,cb){
//     console.log('hello '+name);
//     cb();
// }
// function goodMorning(){
//     console.log('good morning');

// }
// greet("shreekar", goodMorning);

// function step1(bread, cb) {
//   console.log("bread baked");
//   cb();
// }
// function step2(bread, cb) {
//   console.log("stuffing done");
//   cb();
// }
// function step3(bread, cb) {
//   console.log("grilled");
//   cb();
// }
// function step4(bread, cb) {
//   console.log("serve");
//   cb();
// }

function bakeBread(bread, cb) {
  setTimeout(() => {
    console.log("bread is baked");
    cb();
  }, 3000);
}
function addStuffing(bread, cb) {
  setTimeout(() => {
    console.log("stuffing done");
    cb();
  }, 3000);
}
function grillBread(bread, cb) {
  setTimeout(() => {
    console.log("grilling done");
    cb();
  }, 3000);
}
function serveBread(bread) {
  setTimeout(() => {
    console.log("Bread is served");
  }, 3000);
}

bakeBread("bread", () => {
  addStuffing("bread", () => {
    grillBread("bread", () => {
      serveBread();
    });
  });
});
