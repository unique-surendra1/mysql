import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className=" z-50 fixed top-0 flex justify-between items-center w-full px-5 h-[70px] bg-blue-800 text-white ">
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <div className="links">
        <ul className="flex gap-x-2 text-[14px]">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/loign">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
