import { strategy, vision } from "../constants";
import styles from "../style";

import { motion } from "framer-motion";
import { caretright } from "../assets";

const Vision = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:ml-10`}
    >
      <div className="flex flex-col   ">
        <p
          className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
        >
          Vision & Mission
        </p>

        <div className="flex flex-col  items-center mt-5">
          <p className={`${styles.heading3} text-linkactive text-center`}>
            Vision
          </p>
          <p className={`${styles.textSize} mt-2 font-light`}>
            Establishment of an open science-based intelligent cooperation
            ecosystem to accelerate science and technology innovation
          </p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col shadow-lg bg-white p-4 m-2 rounded-lg">
        {vision.map((item, index) => (
          <div className="flex  items-center">
            {/* left side */}
            <div
              className={`flex ${
                index === 3 ? "bg-buttongreen" : "bg-[#01492199]"
              } max-w-[150px] w-full p-2 py-4 m-2 mr-0 rounded-lg text-white font-poppins text-sm  text-center items-center justify-center`}
            >
              <p> {item.title}</p>
            </div>

            <div className="flex h-1 w-14 bg-gray-200"></div>

            <div className="flex flex-1 ml-[-6px]">
              {item.content.map((item) => (
                <div className="flex flex-wrap">
                  <div className="flex bg-white shadow-md px-4 py-2 m-2 rounded-lg font-poppins text-black text-sm text-center items-center">
                    <p> {item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* strategy section */}
      <div className="flex flex-col mt-6 ">
        <p className={` ${styles.heading2} text-center text-linkactive my-4`}>
          Strategy
        </p>

        <div className=" sm:flex  border bg-buttongreen p-3  ">
          <div className="flex w-full sm:max-w-[300px]">
            <p className={`${styles.textSize} mt-2 text-white`}>
              3 Major Strategies
            </p>
          </div>

          <p className={`${styles.textSize} mt-2 text-white`}>
            8 Implementation Tasks
          </p>
        </div>

        {strategy.map((item) => (
          <div key={item.id} className=" sm:flex  border ">
            {/* left hand */}
            <div className=" flex w-full sm:max-w-[300px] mb-4 sm:mb-0 p-3">
              <div className="h-2 w-full max-w-[8px] bg-backgroudgreen rounded-full m-2" />
              <p className={`font-poppins text-sm `}>{item.title}</p>
            </div>
            {/* right hand */}

            <div className="border-l-2 p-3">
              {item.content.map((item) => (
                <div className="flex flex-1 ">
                  <div className="flex gap-2  px-4  pb-3 font-poppins text-sm  items-center">
                    <img src={caretright} />
                    <p> {item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Vision;
