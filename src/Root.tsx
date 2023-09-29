import styles from "./style";
import { Footer, Navbar } from "./components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Splash } from "./pages";
import { useEffect, useState } from "react";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // After 5 seconds, hide the landing component
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 5000 milliseconds (5 seconds)

    return () => {
      // Clear the timer if the component unmounts
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <Splash />;

  return (
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

      <div>
        <Outlet />
      </div>

      <div
        className={`bg-backgroudgreen ${styles.paddingX} ${styles.flexCenter} mt-10`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Root;
