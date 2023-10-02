import { motion } from "framer-motion";
import { hoverVariant } from "../variants";
import { GeneralListModel } from "../types";
import styles from "../style";

interface Props {
  item: GeneralListModel;
  onClick: (val: GeneralListModel) => void;
}

function ServiceCardItem({ item, onClick }: Props) {
  const { title, img } = item;
  return (
    <motion.div
      onClick={() => {
        onClick(item);
      }}
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col  p-5 items-center rounded-[20px] bg-white m-5 shadow-md shadow-gray-150"
    >
      <div className="flex flex-row">
        <img
          src={img}
          alt={"pp"}
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] "
        />
      </div>
      <p className={`${styles.textSize} mt-4 text-center font-semibold`}>
        {title}
      </p>

      <p className={`${styles.textSize}  my-5 text-center `}>
        {item?.content?.substring(0, 60)}
      </p>

      <div
        onClick={() => {
          onClick(item);
        }}
        className={` text-linkactive text-center p-2`}
      >
        <span className="capitalize  text-md  text-center">See More</span>
      </div>
    </motion.div>
  );
}

export default ServiceCardItem;
