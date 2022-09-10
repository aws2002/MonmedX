import React from "react";
import Image from "next/image";
import { AiFillVideoCamera } from "react-icons/ai";
import { IoMdArrowDropright } from "react-icons/io";
export default function Appointments() {
  return (
    <section className="Appointments lg:mt-0 mt-4">
      <div className=" grid grid-cols-12">
        <div className=" col-span-8">
          <p className=" text-sm text-[#8A8A8A] font-medium mb-3">
            Upcoming Appointments - Today
          </p>
        </div>
        <div className=" col-span-4 ml-auto">
          <a href="" className=" text-sm text-[#1C92FF] font-medium mb-3">
            View All{" "}
            <IoMdArrowDropright className=" inline-block text-lg -mt-1" />
          </a>
        </div>
        <div className=" col-span-full shadow-box rounded-lg h-[210px] overflow-y-scroll">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }].map(
            (item) => (
              <div
                className=" grid grid-cols-12 lg:px-5 px-3 py-[11px]  border-b-2"
                key={item.id}
              >
                <div className="lg:col-span-4 col-span-6 lg:order-1 my-auto">
                  <div className=" grid grid-cols-12 gap-x-2">
                    <div className=" lg:col-span-2 col-span-4 flex items-center">
                      <Image
                        src="/assets/Ellipse 6.png"
                        width={50}
                        height={50}
                        priority
                        alt=""
                      />
                    </div>
                    <div className="col-span-8 lg:ml-2 ml-0">
                      <h2 className=" font-bold lg:text-lg text-sm">Joson Smith</h2>
                      <p className=" text-sm text-[#8A8A8A]">
                        test@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" lg:col-span-2 col-span-6 my-auto lg:order-2 order-4 lg:mt-0 mt-3">
                  <span className=" inline-block text-[#8A8A8A]">Doctor</span>
                  <p className=" font-medium">Dr. Audrey Smith</p>
                </div>
                <div className=" lg:col-span-3 col-span-6 my-auto lg:order-3 order-5 lg:mt-0 mt-3">
                  <span className=" inline-block text-[#8A8A8A]">Time</span>
                  <p className=" font-medium">9:30 - 10:00 am est</p>
                </div>
                <div className=" lg:col-span-1 col-span-3 m-auto lg:order-4 order-2">
                  <span className=" font-medium">
                    <AiFillVideoCamera className="text-[#8A8A8A] -mt-1 inline-block mr-2" />
                    FUP
                  </span>
                </div>
                <div className="lg:col-span-2 col-span-3 m-auto lg:order-5 order-3">
                  <button className="button-1">Check-in</button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
