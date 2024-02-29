import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-black min-h-[70vh] text-white ">
      <section className="m-auto mx-5 flex  flex-wrap gap-5  gap-x-5 flex-col md:flex-row justify-center items-start  ">
        <ul className="  text-gray-300 text-start md:text-center my-5 p-5 w-full md:w-1/2  lg:w-1/4  ">
          <li className=" mb-2  text-start md:text-center text-2xl text-blue-100 ">
            Contacts
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="  text-gray-300 text-start md:text-center my-5 p-5 w-full md:w-1/2  lg:w-1/4  ">
          <li className=" mb-2  text-start md:text-center text-2xl text-blue-100 ">
            Contacts
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="  text-gray-300 text-start md:text-center my-5 p-5 w-full md:w-1/2  lg:w-1/4  ">
          <li className=" mb-2  text-start md:text-center text-2xl text-blue-100 ">
            Contacts
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="  text-gray-300 text-start md:text-center my-5 p-5 w-full md:w-1/2  lg:w-1/4  ">
          <li className=" mb-2  text-start md:text-center text-2xl text-blue-100 ">
            Contacts
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </section>
      <br />
      <br />
      <section className="h-[100%] py-10 text-center text-blue-800   ">
        <hr className="text-gray-100 s" />
        All rights reserved
        <br />
      </section>
    </footer>
  );
};

export default Footer;
