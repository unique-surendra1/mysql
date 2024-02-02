import React from "react";

const Button = (text) => {
  return (
    <button className="flex justify-center items-center bg-black px-5 py-2 text-bold text-2xl text-center">
      {text}
    </button>
  );
};

export default Button;
