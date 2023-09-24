import styles from "./style";
import { Footer, Navbar } from "./components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Root = () => (
  <motion.div
    transition={{
      when: "beforeChildren",
      staggerChildren: 2,
    }}
    className="bg-primary w-full overflow-hidden"
  >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={``}>
      <Outlet />
    </div>

    <div
      className={`bg-[#FFFAF4] ${styles.paddingX} ${styles.flexCenter} mt-10`}
    >
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>

    <div className="w-full flex justify-center items-center md:flex-row flex-col p-3 bg-primaryYello">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
        2023 Young Women in Governance Network
      </p>
    </div>
  </motion.div>
);

export default Root;
