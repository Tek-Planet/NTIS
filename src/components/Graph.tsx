import styles from "../style";
import { graph } from "../assets";
import { motion } from "framer-motion";
import { handleOpenLinkInNewTab, dashBaordUrl } from "../constants";

const Carousal = () => {
  return (
    <section className={`flex justify-center items-center mt-8 md:mt-5`}>
      <motion.div
        onClick={() => handleOpenLinkInNewTab(dashBaordUrl)}
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center bg-cover h-[80vh] my-6  rounded-2xl w-full ${styles.marginX}`}
        style={{ backgroundImage: `url(${graph})` }}
      ></motion.div>
    </section>
  );
};

export default Carousal;
