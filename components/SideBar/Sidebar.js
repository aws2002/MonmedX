import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo } from "react";
import { FiHome } from "react-icons/fi";
import { BiMenuAltRight, BiUserPin, BiBookAlt } from "react-icons/bi";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { TbUsers, TbActivityHeartbeat } from "react-icons/tb";
import { BsCheckCircle, BsImage, BsReceipt } from "react-icons/bs";
import { HiOutlineChat } from "react-icons/hi";
import { VscSettingsGear } from "react-icons/vsc";
import ActiveLink from "../Tools/ActiveLink";
import { RiContactsBook2Line } from "react-icons/ri";
import Image from "next/image";
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
  { id: 13, label: "PhoneBook", icon: RiContactsBook2Line, link: "/test214" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-2 pb-3 flex pt-3 justify-between flex-col bg-main text-white",
    {
      ["w-56"]: !toggleCollapse,
      ["w-16"]: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-2 rounded bg-light-lighter"
    // {
    //   "rotate-180": toggleCollapse,
    // }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer  rounded-lg w-full overflow-hidden whitespace-nowrap",
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
        {toggleCollapse && (
          <div className="flex items-center justify-between relative">
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <BiMenuAltRight className="text-xl" />
            </button>
          </div>
        )}
        {!toggleCollapse && (
          <div className=" grid grid-cols-12 gap-x-4">
            <div className=" col-span-3">
              <button
                className={collapseIconClasses}
                onClick={handleSidebarToggle}
              >
                <BiMenuAltRight className="text-xl mx-auto" />
              </button>
            </div>
            <div className="col-span-8 mt-2">
              <Image
                src={"/assets/image 4.png"}
                width={95}
                height={27}
                priority
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        )}

        <div className="flex flex-col items-start mt-2">
          {menuItems.map(({ icon: Icon, id, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={`${classes}`} key={id}>
                <ActiveLink href={menu.link}>
                  <a
                    className={
                      toggleCollapse
                        ? "flex py-[10px] px-3 items-center w-full h-full"
                        : "flex py-[10px] px-7 items-center w-full h-full"
                    }
                  >
                    <div className=" w-10">
                      <Icon
                        className={
                          toggleCollapse ? "w-5 h-5 mx-auto" : "w-5 h-5"
                        }
                      />
                    </div>
                    {!toggleCollapse && (
                      <span className={classNames(" text-sm leading-4")}>
                        {menu.label}
                      </span>
                    )}
                  </a>
                </ActiveLink>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={
          toggleCollapse
            ? `px-4 py-4 border-t cursor-pointer border-[#fff] border-opacity-30`
            : `${getNavItemClasses(
                {}
              )} border-t border-[#fff] px-7 py-4 rounded-none border-opacity-30 cursor-pointer`
        }
      >
        <div className="w-10">
          <VscSettingsGear
            className={
              toggleCollapse ? "w-5 h-5 text-[#fff]" : "w-5 h-5 text-[#989898]"
            }
          />
        </div>
        {!toggleCollapse && (
          <span
            className={
              toggleCollapse
                ? " text-[#fff] leading-4"
                : " leading-4 text-[#989898]"
            }
          >
            Settings
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
