import { implementation, infoPartners, NTISList } from "../constants";
import styles from "../style";

import { NTISCardItem } from "../components";
import { motion } from "framer-motion";
import ImplementationCardItems from "../components/ImplementationCardItem";

const Implementation = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 md:mx-10`}
    >
      <div className="flex flex-col   ">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <p
            className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
          >
            Implementation
          </p>
        </div>
      </div>
      <div className={`flex flex-wrap w-full`}>
        {implementation.map((item) => (
          <ImplementationCardItems item={item} />
        ))}
      </div>
      {/* informational partner section */}
      {/* <div className="flex flex-col mt-6 ">
        <p className={` ${styles.heading2} text-center text-linkactive my-4`}>
          Informational Partner
        </p>

        {infoPartners.map((item) => (
          <div key={item.id} className=" sm:flex justify-between border p-3 ">
            <p className={`${styles.textSize}  font-light`}>{item.title}</p>
            <p className={`${styles.textSize}  font-thin opacity-50`}>
              {item.content}
            </p>
          </div>
        ))}
      </div> */}
    </motion.div>
  );
};

export default Implementation;
