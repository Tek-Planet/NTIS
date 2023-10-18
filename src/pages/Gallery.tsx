import { motion } from "framer-motion";
import { CustomLoader, GalleryCardItem } from "../components";
import styles from "../style";
import { useEffect } from "react";
import { fetchGallery } from "../rtk/features/gallery/gallerySlice";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";

const Gallery = () => {
  const { gallery, isFetching } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gallery.length === 0) {
      dispatch(fetchGallery());
    }
  }, []);
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
          In a picture gallery, every frame tells a story, and every image
          whispers secrets of its captured moment.
        </p>
      </div>
      {isFetching && <CustomLoader />}

      <div className={`flex flex-wrap`}>
        {gallery.map((item) => (
          <GalleryCardItem item={item} onDelete={() => {}} />
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
