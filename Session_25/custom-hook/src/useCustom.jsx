import React from "react";
import { useEffect, useState } from "react";

const useCustom = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json()).then((data)=>{setData(data)})
      .catch((err) => {
        console.error(err);
      });
  }, [url]);
  return [data];
};

export default useCustom;
