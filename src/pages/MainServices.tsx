import { infoPartners, mainServices, NTISList } from "../constants";
import styles from "../style";

import {
  MainServiceCardItem,
  NTISCardItem,
  ServiceCardItem,
} from "../components";
import { motion } from "framer-motion";
import { services } from "../assets";

const MainServices = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:mx-10`}
    >
      <div id="home" className={`flex sm:flex-row flex-col `}>
        <div id="left" className={`flex-1 flex  flex-col xl:px-0   `}>
          <p
            className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
          >
            Services
          </p>

          <p className={`${styles.textSize} mt-2 font-light`}>
            NTIS is the national R&D portal that integrates and provides
            information,including programs, projects, human resources, and
            outcomes of national R&D programs.It is open to all citizens who are
            interested in scientific and technological knowledge and
            information.
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
