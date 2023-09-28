import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../variants";
import { GeneralListModel } from "../types";

interface Props {
  item: GeneralListModel;
}

function MainServiceCardItem({ item }: Props) {
  const { content, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col gap-3 md:w-[47%] lg:w-[30%] xl:w-[33%] w-full p-3 m-2 rounded-[20px] bg-white  shadow-md shadow-gray-150"
    >
      <img src={img} alt={"pp"} className="w-16 h-16" />

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Lorem ipsum dolor sit amet
      </p>

      <p className="font-poppins font-normal text-[12px] sm:text-[14px]  ">
        {content}
      </p>
      <NavLink
        to={`/constactus`}
        className={`p-1 rounded-lg rounded-tl-none w-[120px] bg-buttongreen text-center`}
      >
        <span className="font-poppins  text-[12px] sm:text-[14px] text-white ">
          See More
        </span>
      </NavLink>
    </motion.div>
  );
}

export default MainServiceCardItem;
