import { useState } from "react";

import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../variants";
import { menu, close, logo } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const activeLink =
    "font-poppins font-normal cursor-pointer  mr-5 hover:text-linkactive text-linkactive";
  const normalLink =
    "font-poppins font-normal cursor-pointer  mr-5 hover:text-linkactive text-secondaryGray";

  const normalLinkMobile =
    "font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-linkactive text-white";

  return (
    <nav className="w-full flex py-4 justify-between items-center border-b border-gray-300">
      <NavLink to={`/`}>
        <motion.img
          variants={hoverVariant}
          whileHover={"hover"}
          src={logo}
          alt="menu"
          className="w-[70px] h-[70px] object-center "
        />
      </NavLink>
      <ul className="list-none lg:flex hidden gap-5 justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          if (nav.id === "contactus")
            return (
              <motion.li
                key={index.toString()}
                whileHover={{
                  scale: 1.1,
                  originY: 0,
                }}
                transition={{ type: "spring", stiffness: 150 }}
                className="bg-buttongreen p-1 rounded-lg items-center"
              >
                <NavLink
                  to={`/${nav.id}`}
                  className={` text-white text-center p-2`}
                >
                  <span className="capitalize  text-sm ">{nav.title}</span>
                </NavLink>
              </motion.li>
            );
          else
            return (
              <motion.li
                key={index.toString()}
                whileHover={{
                  scale: 1.2,
                  originY: 0,
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
                  <span className="capitalize  text-sm ">{nav.title}</span>
                </NavLink>
              </motion.li>
            );
        })}
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3">
            {navLinks.map((nav, index) => {
              return (
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    originY: 0,
                    color: "#FF9810",
                  }}
                  transition={{ type: "spring", stiffness: 150 }}
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
                    <span className="capitalize  text-sm ">{nav.title}</span>
                  </NavLink>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
