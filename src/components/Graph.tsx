import styles from "../style";
import { motion } from "framer-motion";

const Carousal = () => {
  return (
    <section
      className={`hidden h-screen lg:flex justify-center items-center mt-8 md:mt-5`}
    >
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 35 }}
        className={`bg-center bg-cover h-screen w-screen ${styles.marginX}`}
      >
        <iframe
          src="https://83.229.69.76:91/webLogin.aspx"
          width="100%"
          height={600} // Set the height to 100vh for full screen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Carousal;
