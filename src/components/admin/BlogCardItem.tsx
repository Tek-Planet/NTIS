import { motion } from "framer-motion";
import { hoverVariant } from "../../variants";
import { NewModel } from "../../types";

interface Props {
  item: NewModel;
  onClick: (val: NewModel) => void;
}

function BlogCardItem({ item, onClick }: Props) {
  const { content, title, image } = item;
  return (
    <motion.div
      onClick={() => {
        onClick(item);
      }}
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col md:w-[47%] lg:w-[33%] xl:w-[30%] w-full justify-between  rounded-[20px]  bg-white  hover:text-black hover:m-5  mx-3  lg:h-[450px]"
    >
      <div className="flex flex-row">
        <img
          src={image}
          alt={"pp"}
          className="w-[100%] object-cover rounded-[20px]"
        />
      </div>
      <div className="p-4">
        <p className="font-poppins font-bold text-[12px] sm:text-[16px]  ">
          {title?.substring(0, 50) + " ..."}
        </p>
        <p className="font-poppins font-normal text-[12px] sm:text-[14px] my-3 ">
          {content?.substring(0, 120)}
        </p>

        <div
          onClick={() => {
            onClick(item);
          }}
          className={`flex flex-row-reverse  text-linkactive  p-2 `}
        >
          <span className="capitalize text-sm  md:text-md ">See Details</span>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCardItem;
