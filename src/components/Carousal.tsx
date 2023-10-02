import styles from "../style";
import { hero } from "../assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  placeholder: string;
};

const Carousal = (props: Props) => {
  let navigate = useNavigate();
  const { placeholder } = props;
  return (
    <section className={`flex justify-center items-center mt-8 md:mt-5`}>
      <motion.div
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center bg-cover h-[80vh] my-6 object-scale-down rounded-2xl w-full ${styles.marginX}`}
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute flex items-center  justify-center right-10 md:right-20 top-[-30px] bg-buttongreen  rounded-full h-20 w-20 border-2">
          <p className={` text-[10px] text-white  `}>{placeholder}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Carousal;
