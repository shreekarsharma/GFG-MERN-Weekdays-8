import React, { useContext } from "react";
import { postman } from "../App";
const Child2 = () => {
  const data = useContext(postman);
  return <div>{data.name}<hr/>{data.age}</div>;
};

export default Child2;
