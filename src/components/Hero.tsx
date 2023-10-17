import { dashBaordUrl, handleOpenLinkInNewTab } from "../constants";
import { useAppSelector } from "../rtk/hooks";
import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const Hero = () => {
  const { dashboardItem } = useAppSelector((state) => state.dashboard);

  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col  mt-5 ${styles.marginX} `}
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        id="left"
        className={`flex-1 `}
      >
        <h1 className="font-poppins font-semibold text-[32px] lg:text-[58px]   lg:leading-[80.8px] leading-[45px] ">
          <span className="text-gradient">{dashboardItem?.title}</span>
        </h1>

        <Button
          onclick={() => {
            handleOpenLinkInNewTab(dashBaordUrl);
          }}
          styles={"text-primary  lg:max-w-1/2 p-2 mt-4  lg:text-[20px]"}
          text="Visit the STI-MIS Dashboard"
        />
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        id="right"
      >
        <p
          className={` md:p-0 sm:max-w-[300px] lg:max-w-[400px]  font-thin mt-5 md:mt-0 lg:mt-5 leading-6`}
        >
          {dashboardItem.subTitle}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
