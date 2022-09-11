import Layout from "../components/Layouts/Layout";
import Appointments from "../components/SectionsPages/Appointments";
import CardHomePage from "../components/SectionsPages/CardHomePage";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsReceipt, BsFillCalendar2DateFill } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { TbClipboardText } from "react-icons/tb";
import { BiUserPin, BiBookAlt } from "react-icons/bi";
import Advertisement from "../components/SectionsPages/Advertisement";
import { BiMap } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import DateTime from "../components/Tools/DateTime";
import Clock from "../components/Tools/Clock";
export default function Home() {
  return (
    <Layout>
      <div className=" grid grid-cols-12 gap-x-4 mt-4">
        <div className=" lg:col-span-3 col-span-full">
          <section className="InfoCardUser">
            <div className="text-white bg-gradient-to-r from-[#177A8F] rounded-lg h-[244px] to-[#2BBEB8] p-4">
              <div className=" bg-[#156574] items-center w-28 rounded-full h-10 inline-flex justify-center px-3">
                <div className=" grid grid-cols-2">
                  <div className=" col-span-1">
                    <Image
                      src="/assets/cloudy.png"
                      priority
                      width={25}
                      height={25}
                      alt=""
                    />
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
                    <DateTime />
                  </p>
                </div>
                <div className=" col-span-5">
                  <p className="font-medium lg:text-base text-sm">
                    <AiOutlineClockCircle className=" inline-block text-xl -mt-1 mr-1" />
                    <Clock />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className=" lg:col-span-9 col-span-full pr-1">
          <Appointments />
        </div>
        <div className="col-span-12 mt-4 pt-3 pr-1 border-t-2 w-full">
          <section>
            <div className=" grid grid-cols-3 gap-6">
              {[
                {
                  id: 1,
                  text1: "You have",
                  text2: "14 Patients Today",
                  icon: (
                    <AiOutlineCalendar className=" text-[85px] text-[#209AA3]" />
                  ),
                  iconBg: (
                    <BsFillCalendar2DateFill className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ),
                  title: "my schedule",
                },
                {
                  id: 2,
                  text1: "You have",
                  text2: "20 New Messages",
                  icon: (
                    <HiOutlineChat className=" text-[85px] text-[#209AA3]" />
                  ),
                  iconBg: (
                    <HiOutlineChat className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ),
                  title: "Inbox",
                },
                {
                  id: 3,
                  text1: "You have",
                  text2: "13 New Tasks",
                  icon: (
                    <TbClipboardText className=" text-[85px] text-[#209AA3]" />
                  ),
                  iconBg: (
                    <TbClipboardText className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ),
                  title: "tasks",
                },
                {
                  id: 4,
                  text1: "Manage your",
                  text2: "23 Memberships",
                  icon: <BiUserPin className=" text-[85px] text-[#209AA3]" />,
                  iconBg: (
                    <BiUserPin className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ),
                  title: "Memberships",
                },
                {
                  id: 5,
                  text1: "CME credits",
                  text2: "You need 25 credits ",
                  icon: <BiBookAlt className=" text-[85px] text-[#209AA3]" />,
                  iconBg: (
                    <BiBookAlt className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ),
                  title: "CME",
                },
                {
                  id: 6,
                  text1: "Manage your",
                  text2: "Billing",
                  icon: <BsReceipt className=" text-[85px] text-[#209AA3]" />,
                  iconBg: (
                    <BsReceipt className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ),
                  title: "Billing",
                },
              ].map((data) => (
                <CardHomePage key={data.id} data={data} />
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-12 mt-4 py-4 pr-1">
          <Advertisement />
        </div>
      </div>
    </Layout>
  );
}
