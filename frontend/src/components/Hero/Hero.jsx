import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users/Users";
import { Typography } from "@mui/material";
import "./Hero.css";
import Products from "./Products/Products";
// import GenerateInvoice from "../DownLoad/GenerateInvoice";

const Hero = () => {
  const [data, setData] = useState([]);
  const [viewButton, setViewButon] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleVisivilty = () => {
      window.scrollY > 100 ? setViewButon(true) : setViewButon(false);
    };

    window.addEventListener("scroll", handleVisivilty);

    return () => {
      window.removeEventListener("scroll", handleVisivilty);
    };
  }, []);

  const url = "http://localhost:5000/api";

  // console.log(data);
  useEffect(() => {
    axios
      .get(`${url}/getusers`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="h-[100%] w-[95%] m-auto mt-[70px]   ">
      {viewButton ? (
        <div className="text-4xl text-center  h-12 w-12 flex justify-center items-center  border-red-600 border-2  rounded-full p-5  z-50 fixed bottom-0 right-0 transparent text-white">
          <button onClick={handleScrollToTop} className=" absolute -top-1 ">
            🔺
          </button>
        </div>
      ) : null}

      <article>
        <section className="  w-full min-h-screen  bg-blue-200 pt-40 mt-20 text-8xl text-center  ">
          Top
        </section>

        <section className="  py-20 min-h-[100vh] w-full  flex justify-center ">
          <div className=" m-auto w-full header-section flex flex-col md:flex-row  gap-5 ">
            <div className="w-full min-h-[70vh] border-emerald-100 border-2  basis-[95%] md:basis-[49%]  bg-gradient-to-tl from-violet-800 from-20%  to-blue-600 to-90%">
              <Typography variant="h4" color="crimson">
                Left
              </Typography>
            </div>
            <div className=" relative w-full min-h-[70vh] border-emerald-100  border-2 basis-[95%] md:basis-[49%]  ">
              <div className=" text-white absolute h-[100%] w-[100%] bg-gradient-to-tl from-violet-800 from-20%  to-blue-600 to-90%  top-0 left-0 ">
                <section>
                  <h4 className=" ">welcom to the blur world!</h4>
                </section>
              </div>
              right
            </div>
          </div>
        </section>
      </article>
      {/* <Users data={data ? data : null} /> */}

      {/* Products section */}
      <section className="">
        <h1 className=" mt-48 mb-20 text-gray-600  text-3xl md:text-4xl lg:text-5xl text-center justify-center font-semibolds ">
          Our Featured Products
        </h1>
        <Products />
      </section>
    </main>
  );
};

export default Hero;
