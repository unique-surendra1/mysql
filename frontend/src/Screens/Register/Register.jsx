import React, { useState } from "react";
import "./Register.css";
import { TextField } from "@mui/material";
import axios from "axios";
import { ContainedButton } from "../../components/reusable/button/Button";
import { OutlinedButton } from "../../components/reusable/button/Button";
import { toast } from "react-toastify";
import { toastSuccess } from "../../components/toast/Toasts";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    userName: "",
    userEmail: "",
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
      user.firstName !== "" ||
      user.userEmail !== "" ||
      user.userName !== "" ||
      user.userPhoneNumber !== ""
    ) {
      const data = {
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
        userName: user.userName,
        userEmail: user.userEmail,
        userPhoneNumber: user.userPhoneNumber,
      };

      // user sended data
      // console.log(data, "data........");

      await axios
        .post(`${url}/registeruser`, data)
        .then((res) => {
          toast.success("User Registered Successfully");
          // console.log(res, "resonse....");
        })
        .catch((err) => {
          toast.error(err.response.data.sqlMessage);
          console.log(err, "Error....");
        });

      // clearing all input fields
      setUser({
        firstName: "",
        middleName: "",
        lastName: "",
        userName: "",
        userEmail: "",
        userPhoneNumber: "",
      });
    } else {
      alert("Fill all fields");
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
        <div className="mb-3 flex flex-col gap-y-2   md:gap-x-2  md:flex-row  md:justify-between md:items-center ">
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
            type="email"
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

        <div>
          <button
            className="  hover:shadow-md hover:shadow-blue-950  transition-all duration-300  rounded bg-blue-800  px-5 py-2 mt-10 text-white font-semibold "
            onClick={handleRegiter}
            type="submit">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
