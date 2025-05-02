let a = 50;
console.log("Global a " + a);

function GreatGrandParent() {
  //   let a = 40;
  console.log("GreatGrandParent a " + a);
  function GrandParent() {
    // let a = 30;
    console.log("GrandParent a " + a);
    function Parent() {
      //   let a = 20;
      console.log("Parent a " + a);
      function Child() {
        let b = 10;
        console.log("Child a " + a);
      }
      Child();
    }
    Parent();
  }
  GrandParent();
}
GreatGrandParent();
