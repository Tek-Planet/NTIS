import { useState } from "react";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../variants";
import { logo } from "../assets";
import styles from "../style";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { SearchMenu, UserMenu } from ".";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);

  const activeLink =
    "font-poppins cursor-pointer text-gray-600 flex  mr-5 hover:text-[#b30710] text-[#b30710]";
  const normalLink =
    "font-poppins cursor-pointer text-gray-600 flex  mr-5 hover:text-[#b30710]";

  const normalLinkMobile =
    "font-poppins font-semibold cursor-pointer text-gray-600 flex text-[16px] mr-5 hover:text-[#b30710]";

  return (
    <nav className={`${styles.paddingX} w-full flex py-4 justify-between`}>
      <div className="flex flex-row items-center">
        <NavLink to={`/`} className={`flex flex-row items-center`}>
          <motion.img
            variants={hoverVariant}
            whileHover={"hover"}
            src={logo}
            alt="menu"
            className="w-[60px] h-[80px] object-center "
          />
          <h1 className="flex leading-5 mt-4 flex-col roboto-bold text-[20px]">
            LADOKE AKINTOLA{" "}
            <span className="text-[14px] font-medium">
              UNIVERSITY OF TECHNOLOGY
            </span>
          </h1>
        </NavLink>
      </div>
      <ul className="list-none lg:flex font-semibold text-xs lg:justify-items-end hidden gap-2 mt-4">
        {navLinks.map((nav, index) => {
          const [isHovered, setIsHovered] = useState("");
          if (nav.title === "ACADEMICS")
            return (
              <motion.li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
                key={index.toString()}
              >
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="capitalize  text-xs flex flex-row items-center">
                    {nav.title} <FaAngleDown className="ml-2" />
                  </span>
                </NavLink>

                {isHovered && nav.subNav && (
                  <div className="bg-white absolute shadow-lg p-2 w-48 z-50 ">
                    {nav.subNav.map((nav, index) => {
                      return (
                        <motion.li
                          key={index.toString()}
                          whileHover={{
                            color: "#FF9810",
                          }}
                          transition={{ type: "spring", stiffness: 150 }}
                          className="mt-2"
                        >
                          <NavLink
                            to={`/${nav.id}`}
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            <span className="capitalize  text-xs ">
                              {nav.title}
                            </span>
                          </NavLink>
                        </motion.li>
                      );
                    })}
                  </div>
                )}
              </motion.li>
            );
          else if (nav.title === "EMAIL")
            return (
              <motion.li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
                key={index.toString()}
                whileHover={
                  {
                    // scale: 1.2,
                    // originY: 0,
                    // color: "#FF9810",
                  }
                }
              >
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="capitalize  text-xs flex flex-row items-center">
                    {nav.title} <FaAngleDown className="ml-2" />
                  </span>
                </NavLink>

                {isHovered && nav.subNav && (
                  <div className="bg-white absolute shadow-lg p-2 w-48 z-50 ">
                    {nav.subNav.map((nav, index) => {
                      return (
                        <motion.li
                          key={index.toString()}
                          whileHover={{
                            color: "#FF9810",
                          }}
                          transition={{ type: "spring", stiffness: 150 }}
                          className="mt-2"
                        >
                          <NavLink
                            to={`/${nav.id}`}
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            <span className="capitalize  text-xs ">
                              {nav.title}
                            </span>
                          </NavLink>
                        </motion.li>
                      );
                    })}
                  </div>
                )}
              </motion.li>
            );
          else if (nav.title === "MORE")
            return (
              <motion.li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
                key={index.toString()}
                whileHover={
                  {
                    // scale: 1.2,
                    // originY: 0,
                    // color: "#FF9810",
                  }
                }
              >
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="capitalize  text-xs flex flex-row items-center">
                    {nav.title} <FaAngleDown className="ml-2" />
                  </span>
                </NavLink>

                {isHovered && nav.subNav && (
                  <div className="bg-white absolute shadow-lg p-2 w-48 z-50 ">
                    {nav.subNav.map((nav, index) => {
                      return (
                        <motion.li
                          key={index.toString()}
                          whileHover={{
                            color: "#FF9810",
                          }}
                          transition={{ type: "spring", stiffness: 150 }}
                          className="mt-2"
                        >
                          <NavLink
                            to={`/${nav.id}`}
                            className={({ isActive }) =>
                              isActive ? activeLink : normalLink
                            }
                          >
                            <span className="capitalize  text-xs ">
                              {nav.title}
                            </span>
                          </NavLink>
                        </motion.li>
                      );
                    })}
                  </div>
                )}
              </motion.li>
            );
          else if (nav.title === "Dashboard")
            return (
              <motion.li
                key={index.toString()}
                whileHover={{
                  color: "#FF9810",
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <NavLink
                  target="_blank"
                  to={`${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="capitalize  text-xs ">{nav.title}</span>
                </NavLink>
              </motion.li>
            );
          else
            return (
              <motion.li
                key={index.toString()}
                whileHover={{
                  color: "#FF9810",
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <NavLink
                  to={`/${nav.id}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="capitalize  text-xs ">{nav.title}</span>
                </NavLink>
              </motion.li>
            );
        })}
        <SearchMenu />
      </ul>

      <div className="lg:hidden flex justify-end items-center">
        <UserMenu />
        <div className="flex items-center">
          <div onClick={() => setNav(!nav)} className="ml-4 cursor-pointer">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </div>
          <div
            className={
              nav
                ? "fixed top-0 left-0 lg:w-[300px] shadow-lg overflow-y-scroll w-[80%] h-screen bg-white z-30 duration-300"
                : "fixed top-0 left-[-100%] lg:w-[300px] shadow-lg overflow-y-scroll w-[80%] h-screen bg-white z-30 duration-300"
            }
          >
            <ul className="list-none flex flex-1 flex-col gap-6">
              <div className="flex items-center justify-center">
                <IoIosClose
                  size={50}
                  onClick={() => setNav(!nav)}
                  className="my-3 hover:text-red-600 cursor-pointer"
                />
              </div>
              {navLinks.map((nav, index) => {
                return (
                  <motion.li
                    whileHover={{
                      color: "#FF9810",
                    }}
                    key={nav.id}
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    <NavLink
                      to={`/${nav.id}`}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLinkMobile
                      }
                    >
                      <span className="capitalize text-xs ml-4 border-b p-2 w-full">
                        {nav.title}
                      </span>
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
