import React from "react";
import generatePDF from "react-to-pdf";
import { useRef } from "react";

const GenerateInvoice = () => {
  const targetRef = useRef();

  return (
    <section className="pt-20 pb-20 h-[100%] w-full bg-white flex justify-center  ">
      <main className="m-auto pl-2">
        <div
          ref={targetRef}
          className=" m-auto pl-2  w-[20.1cm]   h-[29.6cm] flex justify-center  bg-gray-100 border-emerald-800 border-2 ">
          <div className=" ml-[1cm] ">GenerateInvoice</div>
          <hr className="bg-black " />
        </div>
        <button
          onClick={() => {
            generatePDF(targetRef, { filename: "file.pdf" });
          }}
          className=" relative text-white font-semibold rounded-sm bg-gradient-to-br from-blue-700  via-purple-500  to-violet-700   flex justify-center items-center px-3 py-2  ">
          Download PDF
          {/* <span className=" top-0  h-[100%] w-[100%] bg-white  "></span> */}
        </button>
      </main>
    </section>
  );
};

export default GenerateInvoice;
