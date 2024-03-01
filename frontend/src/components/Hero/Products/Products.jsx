import React from "react";
import "./Products.css";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <>
      <div className=" products min-h-screen w-full ">
        <ul>
          <motion.li
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, type: "spring" }}
            exit={{ scale: 0 }}
            className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, type: "spring" }}
            exit={{ scale: 0 }}
            className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, type: "spring" }}
            exit={{ scale: 0 }}
            className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, type: "spring" }}
            exit={{ scale: 0 }}
            className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </motion.li>
          <motion.li
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.2, type: "spring" }}
            exit={{ scale: 0 }}
            className="relative card-d text-5xl text-white cursor-pointer">
            <div className=" card-inside absolute flex justify-center items-center  content-center ">
              {" "}
              We are cards
            </div>{" "}
            Product
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default Products;
