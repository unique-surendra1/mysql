import React from "react";

const Spinner = () => {
  return (
    <div className="  fixed top-0 h-[100dvh] w-full z-50 bg-black text-white text-5xl flex justify-center items-center ">
      {/* <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg> */}

      <div className=" relative duration:500 transition-linear animate-spin h-20 w-20 bg-blue-500 rounded-full  after:bg-white after:h-5 h after:w-5 after:absolute  after:rounded-full z-20  after:content after:border-2 after:block after:border-rose-700 after:border-rounded-full " />
    </div>
  );
};

export default Spinner;
