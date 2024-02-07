import React, { useState } from "react";
import "./Login.css";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ContainedButton } from "../../components/reusable/button/Button";
import { OutlinedButton } from "../../components/reusable/button/Button";
import { toast } from "react-toastify";
import { toastSuccess } from "../../components/toast/Toasts";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
  });

  const handleOnchange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  };

  const url = "http://localhost:5000/api";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (user.userEmail !== "" || user.userName !== "") {
      const data = {
        userName: user.userName,
        userEmail: user.userEmail,
      };

      // user sended data
      // console.log(data, "data........");

      await axios
        .post(`${url}/loginuser`, data)

        .then((res) => {
          console.log(res, "resonse....");

          // if (res.response.status === 404) {
          //   toast.error(res.response.data.message);
          // }

          if (res.status === 200) {
            toast.success(res.data.message);
            if (res.data.status === 200) {
              setUser({
                userName: "",
                userEmail: "",
              });
            }
          }
        })
        .catch((err) => {
          // if (err.response.status === 400) {
          //   toast.error(err.response.data.message);
          // }
          if (err.response.status === 404) {
            toast.error(err.response.data.message);
          }
          // toast.error(err.response.data.sqlMessage);
          console.log(err, "Error....");
        });

      // clearing all input fields
    } else {
      toast.error("Fill all fields");
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

        <div className="p-2 w-full md:w-[100%] m-auto flex items-start  md:justify-between md:items-center flex-col md:flex-row  ">
          <button
            className="mr-2 tracking-wide	text-xl hover:shadow-md hover:shadow-blue-950  transition-all duration-300  rounded bg-blue-800  px-5 py-2  text-white font-semibold "
            onClick={handleLogin}
            type="submit">
            Login
          </button>
          <p className="text-[14px]">
            Do'nt have an account ?{" "}
            <Link to="/sign-up " className="text-blue-800">
              Sign-Up Now
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
