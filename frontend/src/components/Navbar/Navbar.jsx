import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../fetures/auhtSlices/authSlice";
const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className=" nav z-50 fixed top-0 flex justify-between items-center w-full px-5 h-[70px] bg-blue-800 text-white ">
      <div className="logo">
        <Link to="/">
          <div className="h-10 w-10 rounded-full bg-contain  ">
            <img
              src="./logo.jpg"
              alt="logo"
              className="h-[100%] w-[100%] rounded-full  bg-cover bg-center "
            />
          </div>
        </Link>
      </div>
      <div className="links ">
        <ul className="flex wrap gap-x-2 text-[14px]  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          {userInfo ? (
            <li>
              <Link onClick={logoutUser} to="/">
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          <li>
            <Link to="/sign-up">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
