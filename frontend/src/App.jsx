import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[70px] min-h-[100vh] w-full ">
        <Outlet />
        <ToastContainer />
      </section>
      <Footer />
    </>
  );
};

export default App;
