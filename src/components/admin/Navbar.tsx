import { useState } from "react";

import { navLinks } from "../../constants";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../../variants";
import { menu, close, logo } from "../../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const activeLink =
    "font-poppins font-normal cursor-pointer  mr-5 hover:text-linkactive text-linkactive";
  const normalLink =
    "font-poppins font-normal cursor-pointer  mr-5 hover:text-linkactive text-secondaryGray";

  const normalLinkMobile =
    "font-poppins font-normal cursor-pointer text-[16px] mr-5 hover:text-linkactive text-white";

  return (
    <nav className="flex justify-between p-2 py-6  relative shadow-lg">
      <motion.img
        variants={hoverVariant}
        whileHover={"hover"}
        src={menu}
        alt="menu"
        // className="w-[70px] h-[70px] object-center "
      />

      <NavLink to={`/`}>
        <motion.img
          variants={hoverVariant}
          whileHover={"hover"}
          src={menu}
          alt="menu"
        />
      </NavLink>
    </nav>
  );
};

export default Navbar;
