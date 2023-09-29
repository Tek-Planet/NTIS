import styles from "../style";
import { graph } from "../assets";
import { motion } from "framer-motion";

const Carousal = () => {
  return (
    <section
      className={`hidden lg:flex justify-center items-center mt-8 md:mt-5`}
    >
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center bg-cover h-[550px] rounded-2xl w-full ${styles.marginX}`}
        style={{ backgroundImage: `url(${graph})` }}
      ></motion.div>
    </section>
  );
};

export default Carousal;
