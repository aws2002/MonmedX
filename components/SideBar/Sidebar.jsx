import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import { FiHome } from 'react-icons/fi';
import { BiMenuAltRight ,BiUserPin,BiBookAlt} from 'react-icons/bi';
import { MdOutlineArticle } from 'react-icons/md';
import { AiOutlineCalendar,AiOutlineUser } from 'react-icons/ai';
import { TbUsers,TbActivityHeartbeat } from 'react-icons/tb';
import { BsCheckCircle,BsImage,BsReceipt } from 'react-icons/bs';
import { HiOutlineChat } from 'react-icons/hi';
import { VscSettingsGear } from 'react-icons/vsc';
import ActiveLink from "../Tools/ActiveLink";
const menuItems = [
  { id: 1, label: "Overview", icon: FiHome, link: "/" },
  { id: 2, label: "Today’s Visits", icon: MdOutlineArticle, link: "/test" },
  { id: 3, label: "Schedule", icon: AiOutlineCalendar, link: "/test2" },
  { id: 4, label: "Patients", icon: TbUsers, link: "/test3" },
  { id: 5, label: "To-Do", icon: BsCheckCircle, link: "/test5" },
  { id: 6, label: "Fax Inbox", icon: HiOutlineChat, link: "/test6" },
  { id: 7, label: "Staff", icon: AiOutlineUser, link: "/test9" },
  { id: 8, label: "Lab", icon: TbActivityHeartbeat, link: "/test412" },
  { id: 9, label: "Imaging", icon: BsImage, link: "/test24" },
  { id: 10, label: "Billing", icon: BsReceipt, link: "/test21" },
  { id: 11, label: "Memberships", icon: BiUserPin, link: "/test623" },
  { id: 12, label: "CME", icon: BiBookAlt, link: "/test214" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-2 pt-4 pb-3 bg-light flex justify-between flex-col bg-main text-white",
    {
      ["w-56"]: !toggleCollapse,
      ["w-16"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-2 rounded bg-light-lighter",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
               <BiMenuAltRight /> 
            </button>
        </div>
        <div className="flex flex-col items-start mt-2 ">
          {menuItems.map(({ icon: Icon,id, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={id}>
                <Link href={menu.link}>
                  <a className={toggleCollapse?"flex py-[10px] px-3 items-center w-full h-full":"flex py-[10px] px-7 items-center w-full h-full" }>
                    <div style={{ width: "2rem"}}>
                      <Icon className={toggleCollapse?"w-5 h-5 text-[#fff]":"w-5 h-5 text-[#989898]" }/>
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          " text-sm leading-4"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
           <VscSettingsGear className={toggleCollapse?"w-5 h-5 text-[#fff]":"w-5 h-5 text-[#989898]" }/> 
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-sm leading-4")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

