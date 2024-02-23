import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className=" products min-h-screen w-full ">
        <ul>
          <li className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </li>
          <li className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </li>
          <li className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </li>
          <li className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </li>
          <li className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </li>
        </ul>
      </div>
    </>
  );
};

export default Products;
