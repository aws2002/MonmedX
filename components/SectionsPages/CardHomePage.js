import React from "react";

import { BsFillCalendar2DateFill } from "react-icons/bs";
export default function CardHomePage({data}) {
  return (
    <div className="lg:col-span-1 col-span-full shadow-box overflow-hidden relative rounded-lg card cursor-pointer">
      <div className=" absolute -right-5 top-8 z-10">
      {data.iconBg}
      </div>
      <div className="title p-3 z-10 relative">
        <h3 className=" uppercase text-xs font-bold">{data.title}</h3>
      </div>
      <div className=" grid grid-cols-12 gap-x-8 px-6 pb-5 pt-3 z-10 relative">
        <div className=" col-span-3">
        {data.icon}
        </div>
        <div className=" col-span-9 my-auto">
          <p className=" font-medium">{data.text1}</p>
          <p className=" font-bold text-xl">{data.text2}</p>
        </div>
      </div>
    </div>
  );
}
