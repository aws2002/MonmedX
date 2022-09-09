import React from "react";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { BsFillCalendar2DateFill } from "react-icons/bs";
export default function CardHomePage() {
  return (
    <div className="lg:col-span-1 col-span-full shadow-box overflow-hidden relative rounded-lg card cursor-pointer">
      <div className=" absolute -right-5 top-8 z-10">
        <BsFillCalendar2DateFill className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
      </div>
      <div className="title p-3 z-10 relative">
        <h3 className=" uppercase text-xs font-bold">my schedule</h3>
      </div>
      <div className=" grid grid-cols-12 gap-x-8 px-6 pb-5 pt-3 z-10 relative">
        <div className=" col-span-3">
          <AiOutlineCalendar className=" text-[85px] text-[#209AA3]" />
        </div>
        <div className=" col-span-9 my-auto">
          <p className=" font-medium">You have</p>
          <p className=" font-bold text-xl">14 Patients Today</p>
        </div>
      </div>
    </div>
  );
}
