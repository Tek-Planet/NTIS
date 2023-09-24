import { motion } from "framer-motion";
import { hoverVariant } from "../variants";

interface Props {
  item: {
    content: string;
    name: string;
    title: string;
    img: string;
  };
}

function ServiceCardItem({ item }: Props) {
  const { content, name, title, img } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col px-5 py-5 rounded-[20px] feedback-card hover:bg-white text-white hover:text-black hover:m-5 border-white border-2 mx-3 "
    >
      <div className="flex flex-row">
        <img src={img} alt={"pp"} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[12px] sm:text-[16px] md:text-[20px]  ">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] sm:text-[14px] md:text-[16px]  opacity-60 ">
            {title}
          </p>
        </div>
      </div>
      <p className="font-poppins font-normal text-[12px] sm:text-[14px] ]  my-5">
        {content}
      </p>
    </motion.div>
  );
}

export default ServiceCardItem;
