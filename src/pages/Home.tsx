import styles from "../style";
import { Blogs, Carousal, Hero, Research, Services } from "../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchNews } from "../rtk/features/news/newsSlice";
import { useAppSelector, useAppDispatch } from "../rtk/hooks";

const Home = () => {
  const { news } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/aboutus/news`);
  };

  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews());
  }, []);
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
          <Carousal onclick={handleNavigate} placeholder="Explore More" />
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
