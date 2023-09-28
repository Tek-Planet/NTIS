import { gallery } from "../constants";

import { motion } from "framer-motion";
import { GalleryCardItem } from "../components";
import styles from "../style";

const Gallery = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:ml-10`}
    >
      <div className="flex flex-col mb-4  ">
        <p
          className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
        >
          Gallery
        </p>

        <p className={`${styles.textSize} mt-2 font-light`}>
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className={`flex flex-wrap`}>
        {gallery.map((item) => (
          <GalleryCardItem item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
