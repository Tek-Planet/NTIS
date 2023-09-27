import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../variants";

interface Props {
  item: {
    content: string;
    img: string;
  };
}

function MainServiceCardItem({ item }: Props) {
  const { content, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col md:w-[47%] lg:w-[30%] xl:w-[33%] w-full p-3 m-2 rounded-[20px] bg-white  shadow-md shadow-gray-150"
    >
      <div className="flex flex-row">
        <img
          src={img}
          alt={"pp"}
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] "
        />
      </div>
      <p className="font-poppins font-normal text-[12px] sm:text-[14px] ] my-5 text-center">
        {content}
      </p>

      <NavLink
        to={`/constactus`}
        className={` text-linkactive text-center p-2`}
      >
        <span className="capitalize  text-md  text-center">See More</span>
      </NavLink>
    </motion.div>
  );
}

export default MainServiceCardItem;
