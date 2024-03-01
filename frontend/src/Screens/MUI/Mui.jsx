import React from "react";
import CustomNav from "../../components/muicomponents/CustomNav";
import Login2 from "../../components/muicomponents/Login2";
import HeroSection from "../../components/muicomponents/HeroSection";
import ProductList from "../../components/muicomponents/ProductList";
const Mui = () => {
  return (
    <div>
      <h1 className=" mt-20 text-3xl text-center text-red-600 bg-green-500">
        Custom navbar
      </h1>
      <CustomNav />
      <h1 className=" mt-20 text-3xl text-center text-red-600 bg-green-500 ">
        Custom Login
      </h1>

      <Login2 />
      <h1 className=" mt-20 text-3xl text-center text-red-600 bg-green-500 ">
        Custom Hero with Navbar but need to enable it
      </h1>

      <h1 className=" mt-20 text-3xl text-center text-red-600 bg-green-500 ">
        Custom Product list
      </h1>

      <ProductList />
    </div>
  );
};

export default Mui;
