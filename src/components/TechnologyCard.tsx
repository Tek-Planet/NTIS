import { motion } from "framer-motion";
import { hoverVariant } from "../variants";
import { bin, pencil } from "../assets";
import CustomImageButton from "./CustomImageButton";

interface Props {
  item: any;
  onClick: (val: any) => void;
  onDelete: (val: any) => void;
  onEdit: (val: any) => void;
  isAdmin?: boolean;
}

function TechnologyCard({ item, onClick, onDelete, onEdit, isAdmin }: Props) {
  const {
    content,
    title,
    office,
    applicationNumber,
    publicationNumber,
    applicant,
    inventors,
  } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col gap-y-1 p-2 md:w-[47%] lg:w-[33%] xl:w-[32%] w-full justify-between  rounded-[20px]  bg-white    mr-3 mb-3  lg:h-[480px] shadow-lg"
    >
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
        Applicants : <span className="font-thin"> {applicant}</span>
      </p>

      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        Inventors : <span className="font-thin"> {inventors}</span>
      </p>

      <div className={`flex justify-between  text-linkactive  p-2 `}>
        {isAdmin && (
          <CustomImageButton onclick={() => onEdit(item)} image={pencil} />
        )}

        {isAdmin && (
          <CustomImageButton onclick={() => onDelete(item)} image={bin} />
        )}

        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          onClick={() => {
            onClick(item);
          }}
        >
          <span className="capitalize text-sm  md:text-md cursor-pointer">
            See Details
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default TechnologyCard;
