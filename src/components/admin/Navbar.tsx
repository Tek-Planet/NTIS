import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../../variants";
import { menu, shutdown } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import {
  setActiveMenu,
  setScreenSize,
} from "../../rtk/features/user/userSlice";

const Navbar = () => {
  const { screenSize, activeMenu } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(setActiveMenu(false));
    } else {
      dispatch(setActiveMenu(true));
    }
  }, [screenSize]);

  const handleActiveMenu = () => dispatch(setActiveMenu(!activeMenu));

  return (
    <nav className="flex justify-between p-2 py-6  relative shadow-lg">
      <button onClick={() => handleActiveMenu()}>
        <motion.img
          variants={hoverVariant}
          whileHover={"hover"}
          src={menu}
          alt="menu"
          // className="w-[70px] h-[70px] object-center "
        />
      </button>

      <motion.img
        variants={hoverVariant}
        whileHover={"hover"}
        src={shutdown}
        alt="menu"
        className="h-8 w-8 mr-2"
      />
    </nav>
  );
};

export default Navbar;
