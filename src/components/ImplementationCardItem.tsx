import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menus } from "../types";
import { hoverVariant } from "../variants";

interface Props {
  item: Menus;
}

function ImplementationCardItems({ item }: Props) {
  const { title, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col max-w-xs md:max-w-[300px] w-full p-5 items-center rounded-[20px] bg- m-2"
    >
      <div className="flex flex-row">
        <img
          src={img}
          // alt={"pp"}
          className="w-[80px] h-[80px] md:w-[220px] md:h-[180px] "
        />
      </div>
      <p className="font-poppins font-semibold text-[20px] sm:text-[14px] my-5 text-center">
        {title}
      </p>
    </motion.div>
  );
}

export default ImplementationCardItems;
