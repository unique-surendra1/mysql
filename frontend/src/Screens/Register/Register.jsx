import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import Button from "../../components/reusable/button/Button";

const Register = () => {
  const [user, setUser] = useState({
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

  const handleRegiter = async (e) => {
    e.preventDefault();

    if (
      user.userEmail !== "" ||
      user.userName !== "" ||
      user.userPhoneNumber !== ""
    ) {
      const data = {
        userName: user.userName,
        userEmail: user.userEmail,
        userPhoneNumber: user.userPhoneNumber,
      };
      console.log(data, "data........");

      await axios
        .post("/", data)
        .then((res) => {
          console.log(res.data, "resonse....");
        })
        .catch((err) => {
          console.log(err, "Error....");
        });
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="bg-gray-100 max-w-lg p-10 m-auto">
      <form className="border border-gray-300 rounded-2xl  m-1 p-3">
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="User name"
            value={user.userName}
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="userEmail"
            type="email"
            placeholder="User email..."
            value={user.userEmail}
            onChange={handleOnchange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">User Mobile Number</label>
          <input
            id="phoneNumber"
            name="userPhoneNumber"
            type="number"
            placeholder="user mobile number"
            value={user.userPhoneNumber}
            onChange={handleOnchange}
          />
        </div>
        <button
          className=" bg-gradient-to-bl from-red-500 to-blue-800 rounded border-red-600 border px-5 py-2 mt-10 text-white font-bold"
          onClick={handleRegiter}
          type="submit">
          Sign-Up
        </button>
      </form>
    </div>
  );
};

export default Register;
