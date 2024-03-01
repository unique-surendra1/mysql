import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-black min-h-[20dvh] text-white ">
      <section className=" ullistyle  ">
        <div className=" ulli">ul</div>
        <div className=" ulli">ul</div>
        <div className=" ulli">ul</div>
        <div className=" ulli">ul</div>
        <div className=" ulli">ul</div>
      </section>
      <br />
      <hr className="bg-gray-600 text-gray-600" />
      <section className="py-5 text-center text-xs">
        <h6>All right reserved &copy;2024</h6>
      </section>
    </footer>
  );
};

export default Footer;
