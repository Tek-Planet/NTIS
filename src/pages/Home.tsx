import styles from "../style";
import { Carousal, Hero } from "../components";
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

      {/* footer */}
    </motion.div>
  );
};

export default Home;
