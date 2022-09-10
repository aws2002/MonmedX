import React from "react";

export default function Advertisement() {
  return (
    <section className="bg-[#2BBEB8] py-9 overflow-hidden rounded-lg relative">
      <div className=" absolute top-0 left-24">
        <img src="./assets/Group (2).png" alt="" />
      </div>
      <div className=" absolute -top-1 right-0">
        <img src="./assets/Group (3).png" alt="" />
      </div>
      <div className=" grid-cols-12 grid relative z-10 px-5">
        <div className=" lg:col-span-10 col-span-full flex justify-center items-center mx-auto ">
          <img src="./assets/Group 9930.png" alt="" />
          <h1 className=" text-white font-extrabold lg:text-5xl text-xl ml-6">
            MonMedX Integrated Medical Billing
          </h1>
        </div>

        <div className=" col-span-full lg:col-span-2 lg:m-auto mt-4 mx-auto">
          <button className=" bg-white lg:text-xl text-lg font-bold px-4 py-3 rounded-md">
            14 Days FREE Trial
          </button>
        </div>
      </div>
    </section>
  );
}
