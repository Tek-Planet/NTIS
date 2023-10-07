import { motion } from "framer-motion";
import styles from "../style";
import { hoverVariant } from "../variants";
import { NewModel } from "../types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import { CustomLoader } from "../components";
import { useEffect } from "react";
import { fetchNews } from "../rtk/features/news/newsSlice";

interface Props {
  item: NewModel;
}

const SideNewsItem = ({ item }: Props) => (
  <div className="flex flex-col gap-2 mb-3">
    <p className="font-poppins italic opacity-50 text-[12px] sm:text-[14px]  ">
      20 September 2023
    </p>
    <p className="font-poppins font-bold text-[12px] sm:text-[16px]  ">
      {item?.title?.substring(0, 50)}
    </p>
    <p className="font-poppins font-normal text-[12px] sm:text-[14px]  ">
      {item?.content?.substring(0, 150)}
    </p>
  </div>
);

const News = () => {
  const { news, isFetching } = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews());
  }, [news]);

  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/aboutus/news/${item.title}`, {
      state: { state: item },
    });
  };
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
      {isFetching && <CustomLoader />}

      {news.length > 0 && (
        <div>
          <motion.div
            onClick={() => handleNavigate(news[0])}
            variants={hoverVariant}
            whileHover={"hover"}
            className="relative p-6 bg-center bg-cover h-96 my-6 rounded-2xl w-full"
            style={{ backgroundImage: `url(${news[0].image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>
            <div className="absolute z-10 p-6 top-0 lg:top-10 left-0 lg:left-10 w-full  lg:max-w-md">
              <p className={`${styles.heading3} text-white`}>
                {news[0].title?.substring(0, 30)}
              </p>

              <p className={`${styles.textSize} text-white mt-5`}>
                {news[0].content?.substring(0, 200)}
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
                  <img src={news[0].image} className="w-full " />
                  <p className="font-poppins font-bold pt-2 text-sm lg:text-[12px] ">
                    {news[0].title?.substring(0, 50) + " ..."}
                  </p>

                  <img src={news[1].image} className="w-full mt-5 " />
                  <p className="font-poppins font-bold pt-2 text-sm lg:text-[12px] ">
                    {news[1].title?.substring(0, 50) + " ..."}
                  </p>
                </div>
                {/* one complete image */}
                <div className="flex flex-col w-full flex-1  m-2  mb-10 lg:mb-0 ">
                  <img src={news[2].image} className=" w-[100%] " />
                  <div className="m-2">
                    <p className="font-poppins font-bold text-[12px] sm:text-[16px]  text-center ">
                      {news[2].title?.substring(0, 50) + " ..."}
                    </p>
                    <p className="font-poppins font-normal text-[12px] sm:text-[14px] mt-2 text-center ">
                      {news[2].content?.substring(0, 150)}
                    </p>
                  </div>
                </div>
              </div>
              {/* bottom wide news Item */}
              <div className="flex flex-col w-full flex-1  m-2  mb-10 lg:mb-0 ">
                <div
                  className=" bg-center bg-cover h-80 my-3 w-full "
                  style={{ backgroundImage: `url(${news[5].image})` }}
                ></div>
                <div className="m-2">
                  <p className="font-poppins font-bold text-[12px] sm:text-[16px]  text-center ">
                    {news[5].title?.substring(0, 50) + " ..."}
                  </p>
                  <p className="font-poppins font-normal text-[12px] sm:text-[14px] mt-2 text-center ">
                    {news[5].content?.substring(0, 150)}
                  </p>
                </div>
              </div>
            </div>

            {/* right new side */}
            <div className=" lg:max-w-[300px] w-full  p-2">
              {news.map((item, index) => {
                if (index < 5) return <SideNewsItem key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default News;
