import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { hoverVariant } from "../variants";

interface Props {
  item: {
    content: string;
    img: string;
  };
}

function ResearchCardItem({ item }: Props) {
  const { content, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col gap-6 p-5  rounded-[20px] bg-white m-5 shadow-md shadow-gray-150"
    >
      <span className="capitalize text-md font-bold">Lorem Ipsum</span>
      <div className="flex  justify-center">
        <div className="relative w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] rounded-full ">
          {/* Outer circle */}
          <div className="absolute w-full h-full rounded-full  border-[5px] border-l-linkactive border-b-linkactive flex items-center justify-center">
            {/* Inner circle */}
            <div className=" w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] rounded-full border-[5px] border-t-buttongreen border-r-buttongreen  flex items-center justify-center">
              {/* Centered text */}
              <span className="capitalize text-[12px] sm:text-[14px]">
                See More
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* bototm section */}
      <div className="flex gap-5 justify-center">
        {/* left */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-backgroudgreen" />
          <p className="font-poppins font-normal text-[12px] sm:text-[14px] ] ">
            Lorem Ipsum
          </p>
        </div>
        {/* right */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-linkactive" />
          <p className="font-poppins font-normal text-[12px] sm:text-[14px] ] ">
            Lorem Ipsum
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ResearchCardItem;
