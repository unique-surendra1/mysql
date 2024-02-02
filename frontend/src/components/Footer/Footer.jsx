import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-black min-h-[70vh] text-white ">
      <section className="flex flex-col justify-around items-center md:flex-row md:gap-x-10 p-2">
        <div className="social">
          <ul>
            <p className="text-[22px]">Services</p>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">LinkedIn</Link>
            </li>
            <li>
              <Link to="/">YouTube</Link>
            </li>
          </ul>
        </div>
        <div className="links flex flex-col md:flex-row gap-x-28 ">
          <ul>
            <p className="text-[22px]">Services</p>
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
          <ul>
            <p className="text-[22px]">Services</p>
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
          <ul>
            <p className="text-[22px]">Services</p>
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
        </div>
      </section>
    </footer>
  );
};

export default Footer;
