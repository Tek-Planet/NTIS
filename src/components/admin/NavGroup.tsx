import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { arrowup, caret, logo, menu } from "../../assets";
import { hoverVariant } from "../../variants";
import { Menus } from "../../types";

interface Props {
  item: Menus;
}

const NavGroup = (props: Props) => {
  const [showMenu, setShowMenu] = useState(true);
  const { item } = props;
  const activeLink =
    "font-poppins font-bold cursor-pointer  hover:text-backgroudgreen text-buttongreen";
  const normalLink =
    "font-poppins font-normal cursor-pointer  hover:text-linkactive ";

  const normalLinkMobile =
    "font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-linkactive text-white";

  const handleCloseSideBar = () => {};

  return (
    <NavLink
      to={`/${item.id}`}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <p className="text-gray-400 dark:text-gray-300 m-1 mt-2 uppercase text-sm">
        {item.title}
      </p>

      {showMenu ? (
        <motion.img
          variants={hoverVariant}
          whileHover={"hover"}
          src={caret}
          alt="menu"
          //   className="w-[70px] h-[70px] object-center "
        />
      ) : (
        <motion.img
          variants={hoverVariant}
          whileHover={"hover"}
          src={caret}
          alt="menu"
          //   className="w-[70px] h-[70px] object-center "
        />
      )}
    </NavLink>
  );
};

export default NavGroup;
