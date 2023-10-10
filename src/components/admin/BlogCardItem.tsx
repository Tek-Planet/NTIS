import { motion } from "framer-motion";
import { hoverVariant } from "../../variants";
import { NewModel } from "../../types";
import { bin, pencil } from "../../assets";
import CustomImageButton from "../CustomImageButton";

interface Props {
  item: NewModel;
  onClick: (val: NewModel) => void;
  onDelete: (val: NewModel) => void;
  onEdit: (val: NewModel) => void;
}

function BlogCardItem({ item, onClick, onDelete, onEdit }: Props) {
  const { content, title, image } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col md:w-[47%] lg:w-[33%] xl:w-[30%] w-full justify-between  rounded-[20px]  bg-white    mx-3 mb-3  lg:h-[480px] shadow-lg"
    >
      <div className="flex flex-row">
        <img
          src={image}
          alt={"pp"}
          className="w-[100%] h-64 object-cover rounded-[20px]"
        />
      </div>
      <div className="p-4">
        <p className="font-poppins font-bold text-[12px] sm:text-[16px]  ">
          {title?.substring(0, 50) + " ..."}
        </p>
        <p className="font-poppins font-normal text-[12px] sm:text-[14px] my-3 ">
          {content?.substring(0, 120)}
        </p>

        <div className={`flex justify-between  text-linkactive  p-2 `}>
          <CustomImageButton onclick={() => onEdit(item)} image={pencil} />
          <CustomImageButton onclick={() => onDelete(item)} image={bin} />

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={() => {
              onClick(item);
            }}
          >
            <span className="capitalize text-sm  md:text-md cursor-pointer">
              See Details
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogCardItem;
