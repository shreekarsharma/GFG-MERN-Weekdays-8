// import React from "react";

// const Child = React.memo(() => {
//   console.log("Child component");

//   return (
//     <>
//       <h2>Child Component</h2>
//     </>
//   );
// });
// export default Child;
import { memo } from "react";

const Child = () => {
  console.log("Child component");

  return (
    <>
      <h2>child component</h2>
    </>
  );
};
export default memo(Child);
