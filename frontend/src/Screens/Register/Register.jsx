import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { ContainedButton } from "../../components/reusable/button/Button";
import { OutlinedButton } from "../../components/reusable/button/Button";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../../components/toast/Toasts";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../../fetures/auhtSlices/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/profile");
  //   }
  // }, []);

  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);

  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    userName: "",
    userEmail: "",
    password: "",
    confirmPassword: "",
    userPhoneNumber: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const url = "http://localhost:5000/api";

  const handleRegiter = async (e) => {
    e.preventDefault();

    if (
      user.firstName !== "" &&
      user.userEmail !== "" &&
      user.userName !== "" &&
      user.password !== "" &&
      user.userPhoneNumber !== ""
    ) {
      if (user.password === user.confirmPassword) {
        const data = {
          firstName: user.firstName,
          middleName: user.middleName,
          lastName: user.lastName,
          userName: user.userName,
          userEmail: user.userEmail,
          password: user.password,
          userPhoneNumber: user.userPhoneNumber,
        };

        // user sended data
        // console.log(data, "data........");

        await axios
          .post(`${url}/registeruser`, data)
          .then((res) => {
            if (res.status === 200) {
              toast.success("User Registered Successfully");
              dispatch(setCredentials(user));
              navigate("/profile");
            }
            // console.log(res, "resonse....");
          })
          .catch((err) => {
            let text = err.response.data;

            if (text.includes("Duplicate")) {
              toast.error(err.response.data.sqlMessage);
              // toast.error(err.response.data);
              toast.error("This email is already registered", toastError);
            }
            console.log(err, "Error....");
          });

        // // clearing all input fields
        // setUser({
        //   firstName: "",
        //   middleName: "",
        //   lastName: "",
        //   userName: "",
        //   userEmail: "",
        //   password: "",
        //   confirmPassword: "",
        //   userPhoneNumber: "",
        // });
      } else {
        alert("Entered password do not matches");
      }
    } else {
      if (user.firstName === "") {
        alert("User first name can not be empty");
      }

      if (user.userEmail === "") {
        alert("User email can not be empty");
      }
      if (user.userPhoneNumber === "") {
        alert("User phone number can not be empty");
      }
      if (user.userName === "") {
        alert("User  name can not be empty");
      }

      if (user.password === "") {
        alert("User password can not be empty");
      }
      alert("Fill all stared (*) fields");
    }
  };

  // textField styleing
  const inputStyle = {
    sx: {
      color: "#2d2d2d",
      padding: "10px",
      fontSize: "17px",
      outlineColor: "#ffffff",
      borderColor: "ffffff",
    },
  };

  const labelStyle = {
    sx: {
      paddingTop: "1px",
      marginTop: "-10px",
      textTransform: "capitalize",
      // fontSize: "12px",
      // outlineOffset: "0px",
    },
  };
  return (
    <div className="regform min-h-screen w-full  flex justify-center items-start pt-10 bg-gray-100 p-10 m-auto">
      <form className="innerForm flex flex-col gap-y-3 bg-white p-20 pb-[100px] relative border min-w-[500px] border-gray-300 rounded-2xl  m-1">
        <div className="mb-3 flex flex-col gap-y-6   md:gap-x-2  md:flex-row  md:justify-between md:items-center ">
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            lang="english"
            name="firstName"
            value={user.firstName}
            onChange={handleOnchange}
            placeholder="Enter user name..."
            required
            type="text"
            fullWidth
            inputProps={inputStyle}
            InputLabelProps={labelStyle}
          />
          <TextField
            id="middleName"
            label="Middle Name"
            variant="outlined"
            name="middleName"
            value={user.middleName}
            onChange={handleOnchange}
            placeholder="Enter user name..."
            type="text"
            fullWidth
            inputProps={inputStyle}
            InputLabelProps={labelStyle}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            lang="english"
            name="lastName"
            value={user.lastName}
            onChange={handleOnchange}
            placeholder="Enter user name..."
            type="text"
            fullWidth
            inputProps={inputStyle}
            InputLabelProps={labelStyle}
          />
        </div>
        <div className="mb-3 flex flex-col gap-y-6   md:gap-x-2  md:flex-row  md:justify-between md:items-center ">
          <div className="mb-3">
            <TextField
              id="userName"
              label="User Name"
              variant="outlined"
              lang="english"
              name="userName"
              value={user.userName}
              onChange={handleOnchange}
              placeholder="Enter user email..."
              required
              type="email"
              fullWidth
              inputProps={inputStyle}
              InputLabelProps={labelStyle}
            />
          </div>

          <div className="mb-3">
            <TextField
              id="userEmail"
              label="User email"
              variant="outlined"
              lang="english"
              name="userEmail"
              value={user.userEmail}
              onChange={handleOnchange}
              placeholder="Enter user email..."
              required
              type="text"
              fullWidth
              inputProps={inputStyle}
              InputLabelProps={labelStyle}
            />
          </div>
          <div className="mb-3">
            <TextField
              id="userPhoneNumber"
              label="PhoneNumber"
              variant="outlined"
              name="userPhoneNumber"
              value={user.userPhoneNumber}
              onChange={handleOnchange}
              placeholder="Enter user name..."
              required
              type="number"
              fullWidth
              inputProps={inputStyle}
              InputLabelProps={labelStyle}
            />
          </div>
        </div>

        <div className="mb-3 flex flex-col gap-y-6   md:gap-x-2  md:flex-row  md:justify-center md:items-center ">
          <div className="mb-3 w-full ">
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              name="password"
              value={user.password}
              onChange={handleOnchange}
              placeholder="Enter user password..."
              required
              type="password"
              fullWidth
              inputProps={inputStyle}
              InputLabelProps={labelStyle}
            />
          </div>
          <div className="mb-3 w-full">
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleOnchange}
              placeholder="Enter user confirmPassword..."
              require
              type="password"
              fullWidth
              inputProps={inputStyle}
              InputLabelProps={labelStyle}
            />
          </div>
        </div>
        <div className="p-2 w-full md:w-[70%] m-auto flex items-start  md:justify-between md:items-center flex-col md:flex-row  ">
          <button
            className=" tracking-wide	text-xl hover:shadow-md hover:shadow-blue-950  transition-all duration-300  rounded bg-blue-800  px-5 py-2  text-white font-semibold "
            onClick={handleRegiter}
            type="submit">
            SignUp
          </button>
          <p className="text-[14px]">
            Already have an account ?
            <Link to="/login " className="text-blue-800">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
