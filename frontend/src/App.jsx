import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[70px] min-h-[100vh] w-full ">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default App;
