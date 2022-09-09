import React from "react";
import { BiMap } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import DateTime from "../Tools/DateTime";
import Clock from "../Tools/Clock";
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
        <h1 className=" font-medium lg:text-3xl text-2xl pb-8 border-b-2 border-opacity-20 border-white">
          Dr. Audrey Graham
        </h1>
        <p className=" mt-3 font-medium lg:text-base text-sm">
          <BiMap className=" inline-block text-lg -mt-1 mr-1" />
          1081 Burrard St, Vancouver, BC V6Z
        </p>
        <div className=" grid grid-cols-12 mt-2">
          <div className=" col-span-7">
            <p className="font-medium lg:text-base text-sm">
              <AiOutlineCalendar className=" inline-block text-xl -mt-1 mr-1" />
              <DateTime/>
            </p>
          </div>
          <div className=" col-span-5">
            <p className="font-medium lg:text-base text-sm">
              <AiOutlineClockCircle className=" inline-block text-xl -mt-1 mr-1" />
              <Clock/>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
