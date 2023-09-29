import { motion } from "framer-motion";
import { GeneralListModel } from "../types";
import { hoverVariant } from "../variants";

interface Props {
  item: GeneralListModel;
}

function ImplementationCardItems({ item }: Props) {
  const { img, subdata } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className=" w-full lg:w-[47%] xl:w-[48%]  m-2 shadow-lg "
    >
      {subdata ? (
        <div className={`flex flex-wrap`}>
          {subdata.map((item) => (
            <img src={item.img} className="w-[47%] sm:w-[48%] m-1 " />
          ))}
        </div>
      ) : (
        <img src={img} className="w-full h-full " />
      )}
    </motion.div>
  );
}

export default ImplementationCardItems;
