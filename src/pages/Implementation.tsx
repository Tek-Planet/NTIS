import { implementation } from "../constants";

import { motion } from "framer-motion";
import ImplementationCardItems from "../components/ImplementationCardItem";

const Implementation = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:ml-10`}
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
    </motion.div>
  );
};

export default Implementation;
