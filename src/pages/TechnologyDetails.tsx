import styles from "../style";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import { NewModel } from "../types";
import { useAppSelector } from "../rtk/hooks";

interface Props {
  item: NewModel;
  setItem: (val: NewModel) => void;
}

const SideNewsItem = ({ item, setItem }: Props) => (
  <div
    onClick={() => {
      setItem(item);
    }}
    className="flex flex-col gap-2 mb-3 cursor-pointer"
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

const TechnologyDetails = () => {
  const { technology } = useAppSelector((state) => state.technology);
  const params = useLocation();
  const { state } = params.state;

  const [item, setItem] = useState(state);

  const textStyle =
    "font-poppins text-justify text-[12px] sm:text-[14px] font-bold";

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
          <div className="flex-1 flex flex-col gap-2">
            <img
              src={item?.image}
              alt="image"
              className="w-full h-[410px] object-cover rounded-xl"
            />

            <p className={`${textStyle}`}>Abstract</p>
            <p className={`${textStyle} font-thin`}>{item?.content}</p>

            <p className={`${textStyle}`}>
              Office : <span className="font-thin"> {item?.office}</span>
            </p>

            <p className={`${textStyle}`}>
              Application Number :{" "}
              <span className="font-thin"> {item?.applicationNumber}</span>
            </p>

            <p className={`${textStyle}`}>
              Publication Date :{" "}
              <span className="font-thin"> {item?.PDate}</span>
            </p>

            <p className={`${textStyle}`}>
              Publication Kind :{" "}
              <span className="font-thin"> {item?.publicationKind}</span>
            </p>

            <p className={`${textStyle}`}>
              Publication Number :{" "}
              <span className="font-thin"> {item?.publicationNumber}</span>
            </p>
            <p className={`${textStyle}`}>
              Application Date :{" "}
              <span className="font-thin"> {item?.applicationDate}</span>
            </p>

            <p className={`${textStyle}`}>
              ipc : <span className="font-thin"> {item?.ipc}</span>
            </p>

            <p className={`${textStyle}`}>
              cpc : <span className="font-thin"> {item?.cpc}</span>
            </p>

            <p className={`${textStyle}`}>
              Applicants : <span className="font-thin"> {item?.applicant}</span>
            </p>

            <p className={`${textStyle}`}>
              Inventors : <span className="font-thin"> {item?.inventors}</span>
            </p>

            <p className={`${textStyle}`}>
              Agents : <span className="font-thin"> {item?.agents}</span>
            </p>

            <p className={`${textStyle}`}>
              Note : <span className="font-thin"> {item?.note}</span>
            </p>

            <p className={`${textStyle}`}>
              Description :{" "}
              <span className="font-thin"> {item?.description}</span>
            </p>

            <p className={`${textStyle}`}>
              Claims : <span className="font-thin"> {item?.claims}</span>
            </p>
          </div>

          {/* right */}
          <div className=" lg:max-w-[300px] w-full  p-2">
            <p className={`${styles.textSize} font-bold`}>Similar Posts</p>
            {technology.map((tech, index) => {
              if (
                tech.id !== item.id &&
                tech?.publicationKind === item?.publicationKind
              )
                return (
                  <SideNewsItem key={index} item={tech} setItem={setItem} />
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetails;
