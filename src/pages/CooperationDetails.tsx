import styles from "../style";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { news } from "../constants";

const SideNewsItem = ({ item }) => (
  <div className="flex flex-col gap-2 mb-3">
    <p className="font-poppins italic opacity-50 text-[12px] sm:text-[14px]  ">
      20 September 2023
    </p>
    <p className="font-poppins font-bold text-[12px] sm:text-[16px]  ">
      {item.title}
    </p>
    <p className="font-poppins font-normal text-[12px] sm:text-[14px]  ">
      {item.content}
    </p>
  </div>
);
const CooperationDetails = () => {
  const params = useLocation();
  const { state } = params.state;
  const [item, setItem] = useState(state);
  return (
    <motion.div
      id="home"
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      <motion.div
        initial={{ y: "-100vw" }}
        animate={{ y: 1 }}
        transition={{ type: "spring", stiffness: 35 }}
      >
        <p
          className={` ${styles.heading2} pt-10 text-center text-backgroudgreen`}
        >
          {item.title}
        </p>
      </motion.div>
      <div className={`${styles.marginX} ${styles.marginY} `}>
        <div className="flex flex-col lg:flex-row gap-2  ">
          {/* left */}
          <div className="flex-1 flex flex-col gap-5">
            <img
              src={item?.img}
              alt="image"
              className="w-full h-[410px] object-cover rounded-xl"
            />
            <p className="text-primaryYello font-medium text-sm">
              Release Date: {item?.createdAt}
            </p>
            <p className={`${styles.paragraph}`}>{item?.content}</p>
          </div>

          {/* right */}
          <div className=" lg:max-w-[300px] w-full  p-2">
            {news.map((item, index) => (
              <SideNewsItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CooperationDetails;
