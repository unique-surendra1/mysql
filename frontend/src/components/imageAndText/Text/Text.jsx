import React from "react";

const Text = ({ text, heading }) => {
  return (
    <div className="text-left  text-xl sm:text-xl md:text-2xl w-full">
      <h1 className=" mb-5 text-gray-600  text-3xl md:text-4xl lg:text-5xl text-left justify-center font-semibolds ">
        {heading}
      </h1>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

export default Text;
