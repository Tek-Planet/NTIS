import { motion } from "framer-motion";
import { GalleryModel } from "../types";
import { hoverVariant } from "../variants";
import CustomImageButton from "./CustomImageButton";
import { bin } from "../assets";

interface Props {
  item: GalleryModel;
  onDelete: (val: any) => void;
}

function ImplementationCardItems({ item, onDelete }: Props) {
  const { image } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="h-96 w-full lg:w-[47%] xl:w-[48%]  m-2 shadow-lg relative"
    >
      <img src={image} className="w-full h-full " />

      <div className="relative bottom-10 left-5">
        <CustomImageButton onclick={() => onDelete(item)} image={bin} />
      </div>
    </motion.div>
  );
}

export default ImplementationCardItems;
