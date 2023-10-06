import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo, menu } from "../../assets";
import { motion } from "framer-motion";
import { hoverVariant } from "../../variants";
import { aboutsMenu, adminNavLinks } from "../../constants";
import { NavGroup } from ".";

type Props = {};

const Sidebar = (props: Props) => {
  const screenSize = 1024;
  const [activeMenu, setActiveMenu] = useState(true);
  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "font-poppins font-bold cursor-pointer  hover:text-backgroudgreen text-buttongreen";
  const normalLink =
    "font-poppins font-normal cursor-pointer  hover:text-linkactive ";

  const normalLinkMobile =
    "font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-linkactive text-white";
  return (
    <div className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-red-200">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight "
            >
              <img className="h-8 w-8" src={logo} alt="logo" />
              <span>PM</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <motion.img
                variants={hoverVariant}
                whileHover={"hover"}
                src={menu}
                alt="menu"
                className="w-[70px] h-[70px] object-center "
              />
            </button>
          </div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 35 }}
            className=" "
          >
            <ul className="flex flex-col list-none gap-5 p-5">
              {adminNavLinks.map((nav) => {
                return (
                  <motion.li
                    whileHover={{
                      scale: 1.2,
                      originX: 0,
                      color: "#FF9810",
                    }}
                    transition={{ type: "spring", stiffness: 150 }}
                    key={nav.id}
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
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
