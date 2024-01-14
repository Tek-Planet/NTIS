import styles from "../style";

import { motion } from "framer-motion";
import { useAppSelector } from "../rtk/hooks";

type Props = {
  placeholder: string;
  image?: string;
  onclick?: () => void;
};

const Carousal = (props: Props) => {
  const { dashboardItem } = useAppSelector((state) => state.dashboard);

  const { placeholder, onclick, image } = props;
  return (
    <section className={`flex justify-center items-center mt-8 md:mt-5`}>
      <motion.div
        onClick={() => {
          if (onclick) onclick();
        }}
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center bg-cover h-[80vh] my-6 object-scale-down rounded-2xl w-full ${styles.marginX}`}
        style={{
          backgroundImage: `url( ${image ? image : dashboardItem?.image})`,
        }}
      >
        <div className="absolute flex items-center  justify-center right-10 md:right-20 top-[-30px] bg-buttongreen  rounded-full h-20 w-20 border-2">
          <p className={` text-[10px] text-white  `}>{placeholder}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousal;
