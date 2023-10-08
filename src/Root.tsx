import styles from "./style";
import { Footer, Navbar } from "./components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { Splash } from "./pages";
import { useAppSelector } from "./rtk/hooks";

const Root = () => {
  const { loading } = useAppSelector((state) => state.user);

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
