import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users/Users";

const Hero = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:5000/api";
  // console.log(data);
  useEffect(() => {
    axios
      .get(`${url}/getusers`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" min-h-screen mt-[70px] bg-slate-300 ">
      <Users data={data} />
    </div>
  );
};

export default Hero;
