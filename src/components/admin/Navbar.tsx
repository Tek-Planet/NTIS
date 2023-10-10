import { useEffect } from "react";

import { motion } from "framer-motion";
import { hoverVariant } from "../../variants";
import { menu, shutdown } from "../../assets";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import {
  logoutUser,
  setActiveMenu,
  setScreenSize,
} from "../../rtk/features/user/userSlice";
import CustomImageButton from "../CustomImageButton";

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
        />
      </button>

      <div className="mr-2">
        <CustomImageButton
          image={shutdown}
          onclick={() => dispatch(logoutUser())}
        />
      </div>
    </nav>
  );
};

export default Navbar;
