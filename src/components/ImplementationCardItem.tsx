import { motion } from "framer-motion";
import { GeneralListModel } from "../types";
import { hoverVariant } from "../variants";

interface Props {
  item: GeneralListModel;
}

function ImplementationCardItems({ item }: Props) {
  const { title, img, content } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="  w-full  md:w-1/1 lg:w-[47%] xl:w-[48%] mb-3 m-2 shadow-lg rounded-lg"
    >
      {title ? (
        <div className="p-3">
          <p className="font-poppins font-semibold text-[16px] md:text-[20px] sm:text-[14px] my-5">
            {title}
          </p>

          <p className="font-poppins text-[14px] md:text-[16px]  ">{content}</p>
        </div>
      ) : (
        <img src={img} className="w-full h-full " />
      )}
    </motion.div>
  );
}

export default ImplementationCardItems;
