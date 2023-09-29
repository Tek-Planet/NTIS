import styles from "../style";
import { Blogs, Carousal, Hero, Research, Services } from "../components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      id="home"
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
        <div className={`${styles.boxWidth} `}>
          <Carousal placeholder="Explore More" />
        </div>
      </div>

      {/* services */}
      <div className={`  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
        </div>
      </div>

      {/* research firm data */}
      <div className={`  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Research />
        </div>
      </div>

      {/* blog updates */}
      <div className={`bg-backgroudgreen  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Blogs />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
