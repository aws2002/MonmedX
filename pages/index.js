import Layout from "../components/Layouts/Layout";
import Appointments from "../components/SectionsPages/Appointments";
import CardHomePage from "../components/SectionsPages/CardHomePage";
import InfoCardUser from "../components/SectionsPages/InfoCardUser";
import { AiOutlineCalendar,  } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import { BsReceipt, BsFillCalendar2DateFill } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { TbClipboardText } from "react-icons/tb";
import { BiUserPin ,BiBookAlt} from "react-icons/bi";
export default function Home() {
  return (
    <Layout>
      <div className=" grid grid-cols-12 gap-x-4 mt-4">
        <div className=" lg:col-span-3 col-span-full">
          <InfoCardUser />
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
                  icon: 
                    <AiOutlineCalendar className=" text-[85px] text-[#209AA3]" />
                  ,
                  iconBg: 
                    <BsFillCalendar2DateFill className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ,
                  title: "my schedule",
                },
                {
                  id: 2,
                  text1: "You have",
                  text2: "20 New Messages",
                  icon: (
                    <HiOutlineChat className=" text-[85px] text-[#209AA3]" />
                  ),
                  iconBg: 
                    <HiOutlineChat className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ,
                  title: "Inbox",
                },
                {
                  id: 3,
                  text1: "You have",
                  text2: "13 New Tasks",
                  icon: 
                    <TbClipboardText className=" text-[85px] text-[#209AA3]" />
                  ,
                  iconBg: 
                    <TbClipboardText className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ,
                  title: "tasks",
                },
                {
                  id: 4,
                  text1: "Manage your",
                  text2: "23 Memberships",
                  icon: <BiUserPin className=" text-[85px] text-[#209AA3]" />,
                  iconBg: 
                    <BiUserPin className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ,
                  title: "Memberships",
                },
                {
                  id: 5,
                  text1: "CME credits",
                  text2: "You need 25 credits ",
                  icon: 
                    <BiBookAlt className=" text-[85px] text-[#209AA3]" />
                  ,
                  iconBg: 
                    <BiBookAlt className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />
                  ,
                  title: "CME",
                },
                {
                  id: 6,
                  text1: "Manage your",
                  text2: "Billing",
                  icon: <BsReceipt className=" text-[85px] text-[#209AA3]" />,
                  iconBg: <BsReceipt className=" text-8xl rotate-[-30deg] text-[#E4E4E4]" />,
                  title: "Billing",
                },
              ].map((data) => (
                <CardHomePage key={data.id} data={data} />
              ))}
            </div>
          </section>
        </div>
        <div className="col-span-12 mt-4 py-4 pr-1">
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
        </div>
      </div>
    </Layout>
  );
}
