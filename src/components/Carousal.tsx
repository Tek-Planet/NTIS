import styles from "../style";
import { hero } from "../assets";
import Button from "./Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Carousal = () => {
  let navigate = useNavigate();

  return (
    <section className={`hidden md:flex `}>
      <motion.div
        initial={{ y: "100vw" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={` flex ${styles.flexCenter}  my-10 `}
      >
        <img src={hero} alt="carousal" className="w-[90%] h-[100%] " />
      </motion.div>
    </section>
  );
};

export default Carousal;
