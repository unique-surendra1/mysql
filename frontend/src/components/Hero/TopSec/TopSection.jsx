import img1 from "../../../images/hand.jpg";

import React, { Suspense, useEffect, useState } from "react";

const TopSection = () => {
  const [Loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [cahrvalue, setCahrvalue] = useState("");

  useEffect(() => {
    console.log("");
  }, [count]);

  return (
    <div className=" w-full min-h-screen  bg-blue-200 pt-40 mt-20  text-center  ">
      <input
        type="text"
        value={cahrvalue}
        onChange={(e) => {
          setCahrvalue(e.target.value);
          let conn = cahrvalue.length;
          conn - 1;
          setCount(conn);
        }}
        placeholder="type somthing"
      />
      <div>{cahrvalue}</div>

      <div> Total Number of characters: {count}</div>
      <div className="relative text-8xl   ">
        <img
          className="m-auto bg-fixed border overflow-hidden  w-full  top-[0px] "
          src={img1}
          alt="img"
        />
      </div>

      {Loading && <h1>Helooo</h1>}
    </div>
  );
};

export default TopSection;
