import styles from "../style";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { technologyMenu } from "../constants";
import { useState } from "react";
import { menu, close } from "../assets";

const Tehcnologies = () => {
  const activeLink =
    "font-poppins font-bold cursor-pointer  hover:text-backgroudgreen text-buttongreen";
  const normalLink =
    "font-poppins font-normal cursor-pointer  hover:text-linkactive ";

  const normalLinkMobile =
    "font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-linkactive text-white";

  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      id="home"
      className="bg-primary w-full overflow-hidden"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col lg:flex-row ${styles.marginX} `}>
            {/* rigth  for destope*/}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              className="hidden lg:flex lg:max-w-[190px] w-full shadow-lg"
            >
              <ul className="flex flex-col list-none gap-5 p-5">
                {technologyMenu.map((nav) => {
                  return (
                    <motion.li
                      whileHover={{
                        scale: 1.2,
                        originY: 0,
                        color: "#FF9810",
                      }}
                      transition={{ type: "spring", stiffness: 150 }}
                      key={nav.id}
                    >
                      <NavLink
                        to={`technologies/${nav.title}`}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <span className="capitalize  text-sm font-bold">
                          {nav.title}
                        </span>
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* menu for mobile */}

            <div className="lg:hidden flex flex-1 justify-start items-center m-2">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-28 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3">
                  {technologyMenu.map((nav) => {
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
                          to={`technologies/${nav.title}`}
                          className={({ isActive }) =>
                            isActive ? activeLink : normalLinkMobile
                          }
                        >
                          <span className="capitalize  text-sm  font-bold">
                            {nav.title}
                          </span>
                        </NavLink>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* left */}
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              className="flex flex-1 w-full  "
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Tehcnologies;
