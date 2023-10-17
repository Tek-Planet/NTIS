import { statshero } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";
import { Button } from "../components";
import { dashBaordUrl, handleOpenLinkInNewTab } from "../constants";

const Statistics = () => {
  return (
    <section className={`flex flex-col justify-center items-center `}>
      <motion.div
        id="home"
        className="relative p-6 bg-center bg-cover h-[500px]  w-full"
        style={{ backgroundImage: `url(${statshero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        <div className="absolute z-10 p-6 top-0 lg:top-10 left-0 lg:left-10 w-full  lg:max-w-md">
          <p className={`${styles.textSize} text-white mt-5`}>
            Statistics empowers informed decision-making. We harness data to
            unveil insights, enabling individuals, policymakers, and researchers
            to navigate complex challenges. Our mission is to deliver reliable,
            comprehensive research, promoting knowledge accessibility and
            driving positive societal change through data-driven solutions.
          </p>
        </div>
      </motion.div>

      <div className="mt-10">
        <Button
          onclick={() => {
            handleOpenLinkInNewTab(dashBaordUrl);
          }}
          styles={"text-primary w-full p-2"}
          text="View Statistics"
        />
      </div>
    </section>
  );
};

export default Statistics;
