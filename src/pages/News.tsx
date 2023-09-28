import { news } from "../constants";

import { motion } from "framer-motion";
import styles from "../style";
import { hoverVariant } from "../variants";
import { carausal } from "../assets";

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

const News = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col w-full mt-5  mx-0 lg:ml-10`}
    >
      <p
        className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
      >
        News
      </p>

      {/* carousal */}

      <motion.div
        variants={hoverVariant}
        whileHover={"hover"}
        className="relative p-6 bg-center bg-cover h-96 my-6 rounded-2xl w-full"
        style={{ backgroundImage: `url(${carausal})` }}
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
      {/* bottom news */}
      <div className="flex flex-col lg:flex-row gap-2 ">
        {/* left news side */}
        <div>
          {/* top new items  */}
          <div className={`flex flex-col lg:flex-row `}>
            <div className=" lg:w-[37%] xl:w-[38%]  m-2  ">
              <img src={news[1].img} className="w-full " />
              <p className="font-poppins font-bold pt-2 text-sm lg:text-[12px] ">
                {news[3].title}
              </p>

              <img src={news[0].img} className="w-full mt-5 " />
              <p className="font-poppins font-bold pt-2 text-sm lg:text-[12px] ">
                {news[3].title}
              </p>
            </div>
            {/* one complete image */}
            <div className="flex flex-col w-full flex-1  m-2  mb-10 lg:mb-0 ">
              <img src={news[3].img} className=" w-[100%] " />
              <div className="m-2">
                <p className="font-poppins font-bold text-[12px] sm:text-[16px]  text-center ">
                  {news[3].title}
                </p>
                <p className="font-poppins font-normal text-[12px] sm:text-[14px] mt-2 text-center ">
                  {news[3].content}
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          {/* bottom wide news Item */}
          <div className="flex flex-col w-full flex-1  m-2  mb-10 lg:mb-0 ">
            <div
              className=" bg-center bg-cover h-80 my-3 w-full "
              style={{ backgroundImage: `url(${news[2].img})` }}
            ></div>
            <div className="m-2">
              <p className="font-poppins font-bold text-[12px] sm:text-[16px]  text-center ">
                {news[3].title}
              </p>
              <p className="font-poppins font-normal text-[12px] sm:text-[14px] mt-2 text-center ">
                {news[3].content}
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        {/* right new side */}
        <div className=" lg:max-w-[300px] w-full  p-2">
          {news.map((item, index) => (
            <SideNewsItem key={index} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default News;
