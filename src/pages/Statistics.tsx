import { carausal, hero, statshero } from "../assets";
import styles from "../style";
import { motion } from "framer-motion";
import { hoverVariant } from "../variants";
import { Button } from "../components";

const Statistics = () => {
  return (
    <section className={`flex flex-col justify-center items-center `}>
      <motion.div
        // variants={hoverVariant}
        // whileHover={"hover"}
        className="relative p-6 bg-center bg-cover h-[500px]  w-full"
        style={{ backgroundImage: `url(${statshero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
        <div className="absolute z-10 p-6 top-0 lg:top-10 left-0 lg:left-10 w-full  lg:max-w-md">
          <p className={`${styles.heading3} text-white`}>
            Lorem ipsum dolor quis justo consectetur.
          </p>

          <p className={`${styles.textSize} text-white mt-5`}>
            Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo
            quis varius sodales at mauris et. Ipsum vel senectu.
          </p>
        </div>
      </motion.div>

      <div className="mt-10">
        <Button
          onclick={() => {
            alert("welcome");
          }}
          styles={"text-primary w-full p-2"}
          text="View Statistics"
        />
      </div>
    </section>
  );
};

export default Statistics;
