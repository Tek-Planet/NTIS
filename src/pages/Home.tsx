import styles from "../style";
import {
  Blogs,
  Carousal,
  Hero,
  Partners,
  Research,
  Services,
} from "../components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchNews } from "../rtk/features/news/newsSlice";
import { useAppSelector, useAppDispatch } from "../rtk/hooks";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { graph, statshero } from "../assets";

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
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop
            interval={3000}
            showArrows={false}
            showStatus={false}
          >
            <Carousal
              image={statshero}
              onclick={handleNavigate}
              placeholder="Explore More"
            />

            <Carousal
              image={graph}
              onclick={handleNavigate}
              placeholder="Explore More"
            />

            <Carousal onclick={handleNavigate} placeholder="Explore More" />
          </Carousel>

          <p className={` ${styles.heading2} text-center `}>
            STI Information for social transformation
          </p>
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

      <div className={`  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Partners />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
