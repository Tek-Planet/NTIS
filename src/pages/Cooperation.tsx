import styles from "../style";
import { Carousal, Projects } from "../components";
import { motion } from "framer-motion";

const Cooperation = () => {
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      <motion.div
        initial={{ y: "-100vw" }}
        animate={{ y: 1 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={` ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <p
            className={` ${styles.heading2} pt-10 text-center text-backgroudgreen`}
          >
            Co-Projects
          </p>
          <p className={`${styles.textSize} mt-2 font-light text-center`}>
            National or International Projects that have assisted STI MIS
            implemented. 
          </p>
        </div>
      </motion.div>

      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Carousal placeholder="Latest ongoing" />
        </div>
      </div>
      {/* ongoing project  */}

      <div className={`  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
        </div>
      </div>
    </motion.div>
  );
};

export default Cooperation;
