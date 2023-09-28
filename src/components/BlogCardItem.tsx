import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../variants";

interface Props {
  item: {
    content: string;
    img: string;
  };
}

function BlogCardItem({ item }: Props) {
  const { content, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col   rounded-[20px]  bg-white  hover:text-black hover:m-5  mx-3 "
    >
      <div className="flex flex-row">
        <img
          src={img}
          alt={"pp"}
          className="w-[100%] h-[250px] rounded-[20px]"
        />
      </div>
      <div className="p-4">
        <p className="font-poppins font-bold text-[12px] sm:text-[16px]  ">
          Title
        </p>
        <p className="font-poppins font-normal text-[12px] sm:text-[14px] my-3 ">
          {content}
        </p>

        <NavLink
          to={`/constactus`}
          className={`flex flex-row-reverse  text-linkactive  p-2 `}
        >
          <span className="capitalize text-sm  md:text-md ">See Details</span>
        </NavLink>
      </div>
    </motion.div>
  );
}

export default BlogCardItem;
