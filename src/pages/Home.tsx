import styles from "../style";
import { Carousal, Hero, Services } from "../components";
import { motion } from "framer-motion";

const Home = () => {
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
          <Hero />
        </div>
      </div>

      {/* carousal */}
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Carousal />
        </div>
      </div>

      {/* services */}
      <div className={`  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>

      {/* blog updates */}
      <div className={`bg-backgroudgreen  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
