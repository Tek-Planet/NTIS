import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { projecticon } from "../assets";
import styles from "../style";
import { hoverVariant } from "../variants";

interface Props {
  item: {
    content: string;
    img: string;
    title: string;
    created: string;
  };
}

function ProjectCardItem({ item }: Props) {
  const { content, img, title, created } = item;

  return (
    <motion.div
      onClick={() => {
        // onClick(item);
      }}
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col sm:flex-row  my-5 gap-4 w-full  min-h-[120px]   shadow-md cursor-pointer rounded-md"
    >
      <div className="">
        <img src={img} className={"w-full  h-[250px]    md:w-[300px] "} />
      </div>

      <div
        className={`flex  flex-col gap-1 sm:gap-2 flex-1 p-3 ${styles.textSize}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className={`  text-buttongreen`}>{title}</p>
            <p className=" text-gray-400  ">{created}</p>
          </div>
          <img src={projecticon} />
        </div>

        <div className="flex flex-col gap-2 mt-5 ">
          <p className=" text-gray-500  ">Overview</p>
          <p className=" text-gray-400  ">
            <span className="sm:hidden">
              {content.substring(0, 60) + " ..."}
            </span>
            <span className="hidden sm:flex md:hidden">
              {content.substring(0, 100) + " ..."}
            </span>
            <span className="hidden md:flex">
              {content.substring(0, 200) + " ..."}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCardItem;
