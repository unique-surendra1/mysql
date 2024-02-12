import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "./Users/Users";
// import GenerateInvoice from "../DownLoad/GenerateInvoice";

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
    <div className=" h-[100%] mt-[70px] bg-slate-100 ">
      {/* <GenerateInvoice /> */}
      <Users data={data ? data : null} />
    </div>
  );
};

export default Hero;
