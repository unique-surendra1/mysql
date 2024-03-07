import img1 from "../../../images/hand.jpg";

import React, { Suspense, useState } from "react";

const TopSection = () => {
  const [Loading, setLoading] = useState(true);
  return (
    <div className=" w-full min-h-screen  bg-blue-200 pt-40 mt-20 text-8xl text-center  ">
      <div className="relative   ">
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
