import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  gitHubIcon,
  linkedInIcon,
  youTubeIcon,
} from "../../assets/Icons";

const Footer = () => {
  return (
    <footer className=" bottom-0 w-full bg-black min-h-[20dvh] text-white ">
      <section className=" ullistyle  ">
        <div className=" ulli">
          <h1 className=" ">Quick Links</h1>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className=" ulli">
          {" "}
          <h1 className=" ">Services</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className=" ulli">
          {" "}
          <h1 className=" ">About Us</h1>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className=" ulli">
          <ul className="flex flex-wrap justify-around items-center gap-6">
            <li className="h-16 w-16 shadow-gray-700 shadow-md ">
              {gitHubIcon}
            </li>
            <li className="h-16 w-16 shadow-gray-700 shadow-md ">
              {linkedInIcon}
            </li>
            <li className="h-16 w-16 shadow-gray-700 shadow-md ">
              {twitterIcon}
            </li>
            <li className="h-16 w-16 shadow-gray-700 shadow-md ">
              {facebookIcon}
            </li>
            <li className="h-16 w-16 shadow-gray-700 shadow-md ">
              {instagramIcon}
            </li>
            <li className="h-16 w-16 shadow-gray-700 shadow-md ">
              {youTubeIcon}
            </li>
          </ul>
        </div>
        <div className=" ulli">
          <h1>Contact Us</h1>
          <ul className="">
            <li className="">
              Email:<a href="mailto:info@myuniqpay.com">info@myuniqpay.com</a>
            </li>
            <li className="">
              Phone Number : <a href="tel:8105326650"> +91 8953423243</a>
            </li>
          </ul>
        </div>
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
