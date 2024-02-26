import React, { useState, useEffect } from "react";
import "./Slide.css";

import img1 from "/crypto/cryptopic1.jpg";
import img2 from "/crypto/cryptopic2.jpg";
import img3 from "/crypto/cryptopic3.jpg";
import img4 from "/crypto/cryptopic4.jpg";
import img5 from "/crypto/cryptopic5.jpg";
import img6 from "/crypto/cryptopic6.jpg";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let slides = [
    { name: "Stay out of banks...", img: img1 },
    { name: "Banking is necessary, Banks are not...", img: img2 },
    { name: "Fast banking...", img: img3 },
    { name: "Seamless Payment Solutions ", img: img4 },
    { name: "Secure Payments", img: img5 },
  ];

  useEffect(() => {
    let intervarl = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(intervarl);
    };
  }, [slides.length]);

  return (
    <div className="min-h-screen  bg-blue-200 flex justify-center items-center text-6xl text-justify text-white">
      {slides.map((item, index) => {
        return (
          <div
            key={index}
            className={`ani  w-full  transition-all  duration-1000 border border-green-950 p-10 ${
              index === currentIndex
                ? " opacity-100 py-10 block bg-green-400"
                : "-py-10 hidden opacity-0 bg-green-900"
            } `}>
            <h1 className="text-bold text-center capitalize tracking-widest ">
              {item.name}
            </h1>
            <hr className="pt-10" />
            <div className=" relative  bg-center bg-cover  h-[50dvh] sm:h-[60dvh] md:h-[80dvh]  w-full ">
              <img
                src={item.img}
                alt={item.name}
                className="  rounded-2xl m-auto bg-center bg-cover h-[100%] w-[80%]  "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
