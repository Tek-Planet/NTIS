import styles from "../style";
import { Carousal, Projects } from "../components";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col md:flex-row ${styles.marginX} `}>
            <div className="flex  md:max-w-sm w-full ">
              <p
                className={` ${styles.heading2} p-5 text-backgroudgreen text-center`}
              >
                Statistics
              </p>
            </div>

            <div className="flex flex-1 h-screen m-10 md:m-0 relative content-center items-center justify-center">
              <div className="w-full  bg-white max-w-lg my-4 rounded-lg p-6 shadow-md relative z-50">
                <h2 className={`${styles.textSize} font-poppins font-bold `}>
                  Lorem Ipsium
                </h2>
                <p className={`${styles.textSize} my-4 `}>
                  Lorem ipsum dolor sit amet consectetur. Tortor viverra quam
                  justo quis varius sodales at mauris et. Ipsum vel senectus
                  mauris augue massa. Sapien pulvinar molestie orci senectus.
                </p>

                <div className="flex-row  sm:flex  items-center justify-evenly">
                  <div className="flex-1 border border-t-gray-50">
                    <h2 className={`${styles.textSize} font-poppins  p-2`}>
                      Research Website
                    </h2>
                  </div>
                  <div className="bg-backgroudgreen mt-3  sm:mt-0 p-2 rounded-md">
                    <h2
                      className={`${styles.textSize} font-poppins text-white  `}
                    >
                      Click to open
                    </h2>
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-[300px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] rounded-full bg-backgroudgreen absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
