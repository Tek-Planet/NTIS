import styles from "../style";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { news } from "../constants";
import { NewModel } from "../types";

interface Props {
  item: NewModel;
  setItem: (val: NewModel) => void;
}

const SideNewsItem = ({ item, setItem }: Props) => (
  <div
    onClick={() => {
      setItem(item);
    }}
    className="flex flex-col gap-2 mb-3"
  >
    <p className="font-poppins italic opacity-50 text-[12px] sm:text-[14px]  ">
      {item.createdAt}
    </p>
    <p className="font-poppins font-bold text-[12px] sm:text-[16px]  ">
      {item?.title?.substring(0, 50)}
    </p>
    <p className="font-poppins font-normal text-[12px] sm:text-[14px]  ">
      {item?.content?.substring(0, 150)}
    </p>
  </div>
);
const NewsDetails = () => {
  const params = useLocation();
  const { state } = params.state;
  const [item, setItem] = useState(state);

  return (
    <div id="home" className=" bg-primary w-full overflow-hidden">
      <div className="flex justify-items-center justify-center w-full">
        <p
          className={` ${styles.heading2} pt-10 text-center text-backgroudgreen lg:px-10`}
        >
          {item.title}
        </p>
      </div>
      <div className={`${styles.marginX} ${styles.marginY} `}>
        <div className="flex flex-col lg:flex-row gap-2  ">
          {/* left */}
          <div className="flex-1 flex flex-col gap-5">
            <img
              src={item?.image}
              alt="image"
              className="w-full h-[410px] object-cover rounded-xl"
            />
            {/* <p className="text-primaryYello font-medium text-sm">
              Release Date: {item?.createdAt}
            </p> */}
            <p className={`${styles.paragraph}`}>{item?.content}</p>
          </div>

          {/* right */}
          <div className=" lg:max-w-[300px] w-full  p-2">
            {news.map((project, index) => {
              if (project.id !== item.id)
                return (
                  <SideNewsItem key={index} item={project} setItem={setItem} />
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
