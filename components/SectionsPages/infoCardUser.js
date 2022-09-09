import React from "react";
import { BiMap } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

import Image from "next/image";
export default function InfoCardUser() {
  return (
    <section className="InfoCardUser">
      <div className="text-white bg-gradient-to-r from-[#177A8F] rounded-lg h-[244px] to-[#2BBEB8] p-4">
        <div className=" bg-[#156574] items-center w-28 rounded-full h-10 inline-flex justify-center px-3">
          <div className=" grid grid-cols-2">
            <div className=" col-span-1">
              <Image src="/assets/cloudy.png" priority width={25} height={25} alt="" />
            </div>
            <div className=" col-span-1">
              <span className=" font-medium text-xl">24°C</span>
            </div>
          </div>
        </div>
        <span className=" block mt-3">Good Morning</span>
        <h1 className=" font-medium text-3xl pb-8 border-b-2 border-opacity-20 border-white">
          Dr. Audrey Graham
        </h1>
        <p className=" mt-3 font-medium">
          <BiMap className=" inline-block text-xl -mt-1 mr-1" />
          1081 Burrard St, Vancouver, BC V6Z
        </p>
        <div className=" grid grid-cols-12 mt-2">
          <div className=" col-span-5">
            <p className="font-medium">
              <AiOutlineCalendar className=" inline-block text-xl -mt-1 mr-1" />
              12 Dec 20,
            </p>
          </div>
          <div className=" col-span-5">
            <p className="font-medium">
              <AiOutlineClockCircle className=" inline-block text-xl -mt-1 mr-1" />
              8:03 am
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
