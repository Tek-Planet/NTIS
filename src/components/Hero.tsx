import styles from "../style";
import { hero } from "../assets";
import Button from "./Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/contactus`);
  };
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
          <span className="text-gradient">Your research and data partner </span>
          <br className="sm:block hidden" />
          Visit the MIS
        </h1>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        id="right"
      >
        <p className={` md:p-0 max-w-[400px] font-thin mt-5 leading-6`}>
          Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo quis
          varius sodales at mauris et. Ipsum vel senectus mauris augue massa.
          Sapien pulvinar molestie orci senectus pellentesque aliquet. Tincidunt
          diam pellentesque nulla amet pretium ac nisl.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
