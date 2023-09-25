import styles from "../style";
import { Carousal, Hero, Projects } from "../components";
import { motion } from "framer-motion";

const Cooperation = () => {
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <p
            className={` ${styles.heading2} pt-10 text-center text-backgroudgreen`}
          >
            Our Services
          </p>
        </div>
      </div>

      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Carousal />
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
