import { mainServices } from "../constants";
import styles from "../style";

import { MainServiceCardItem } from "../components";
import { motion } from "framer-motion";
import { services } from "../assets";

const MainServices = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:ml-10`}
    >
      <div id="home" className={`flex sm:flex-row flex-col `}>
        <div id="left" className={`flex-1 flex  flex-col xl:px-0   `}>
          <p
            className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
          >
            Services
          </p>

          <p className={`${styles.textSize} mt-2 font-light`}>
            We offer comprehensive research and data services driven by our
            mission to provide accessible, trustworthy information. Our
            commitment to reliability empowers individuals, researchers, and
            decision-makers with valuable insights, fostering informed decisions
            and positive societal change. Explore our services to access the
            knowledge you need for a brighter future.
          </p>
        </div>

        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 35 }}
          id="right"
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img src={services} alt="billing" className="w-full h-[100%] " />
        </motion.div>
      </div>

      <div className={`flex flex-wrap w-full  `}>
        {mainServices.map((item) => (
          <MainServiceCardItem item={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default MainServices;
