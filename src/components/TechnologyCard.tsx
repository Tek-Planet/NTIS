import { motion } from "framer-motion";
import { hoverVariant } from "../variants";
import { NewModel } from "../types";

interface Props {
  item: NewModel;
  onClick: (val: NewModel) => void;
}

function TechnologyCard({ item, onClick }: Props) {
  const {
    content,
    title,
    image,
    office,
    applicationNumber,
    publicationNumber,
    applicationDate,
    applicant,
    inventors,
  } = item;
  return (
    <motion.div
      onClick={() => {
        onClick(item);
      }}
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col gap-y-1 p-2 md:w-[47%] lg:w-[33%] xl:w-[30%] w-full justify-between  rounded-[20px]  bg-white    mr-3 mb-3  lg:h-[480px] shadow-lg"
    >
      {/* <div className="flex flex-row">
        <img
          src={image}
          alt={"pp"}
          className="w-[100%] h-64 object-cover rounded-[20px]"
        />
      </div> */}

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        {title}
      </p>
      <p className="font-poppins font-normal text-[12px] sm:text-[14px] my-3 ">
        {content?.substring(0, 180) + "..."}
      </p>

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Office : <span className="font-thin"> {office}</span>
      </p>

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Application Number :{" "}
        <span className="font-thin"> {applicationNumber}</span>
      </p>

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Publication Number :{" "}
        <span className="font-thin"> {publicationNumber}</span>
      </p>
      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Application Date : <span className="font-thin"> {applicationDate}</span>
      </p>

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Applicants : <span className="font-thin"> {applicant}</span>
      </p>

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Inventors : <span className="font-thin"> {inventors}</span>
      </p>

      <div
        onClick={() => {
          onClick(item);
        }}
        className={`flex flex-row-reverse  text-linkactive  p-2 `}
      >
        <span className="capitalize text-sm  md:text-md ">See Details</span>
      </div>
    </motion.div>
  );
}

export default TechnologyCard;
