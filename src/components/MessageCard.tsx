import { motion } from "framer-motion";
import { hoverVariant } from "../variants";
import moment from "moment";

interface Props {
  item: any;
  onClick: (val: any) => void;
}

function MessageCard({ item, onClick }: Props) {
  const { content, name, email, createdAt } = item;
  return (
    <motion.div
      variants={hoverVariant}
      whileHover={"hover"}
      className="flex flex-col gap-y-1 p-2 md:w-[47%] lg:w-[33%] xl:w-[32%] w-full justify-between  rounded-[20px]  bg-white    mr-3 mb-3  shadow-lg"
    >
      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        From: {name}
      </p>
      <p className="font-poppins font-bold text-[12px] sm:text-[14px]  ">
        {email}
      </p>
      <p className="font-poppins  text-[12px] sm:text-[14px]  ">
        {moment(createdAt).format("DD/MM/YYYY hh:mm a")}
      </p>
      <p className="font-poppins font-normal text-[12px] sm:text-[14px] my-3 ">
        {content?.substring(0, 180) + "..."}
      </p>

      <div className={`flex justify-between  text-linkactive  p-2 `}>
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

export default MessageCard;
