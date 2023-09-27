import { motion } from "framer-motion";
import { Menus } from "../types";
import { hoverVariant } from "../variants";

interface Props {
  item: Menus;
}

function NTISCardItem({ item }: Props) {
  const { title, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col max-w-xs md:max-w-[300px] w-full p-5 items-center rounded-[20px] bg-white m-2 shadow-md shadow-gray-150"
    >
      <div className="flex flex-row">
        <img
          src={img}
          alt={"pp"}
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] "
        />
      </div>
      <p className="font-poppins font-normal text-[12px] sm:text-[14px] ] my-5 text-center">
        {title}
      </p>
    </motion.div>
  );
}

export default NTISCardItem;
