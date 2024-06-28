/* eslint-disable @typescript-eslint/ban-types */
import { motion } from "framer-motion";

interface ButtonProps {
  styles?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onclick?: Function;
  isLink?: boolean;
  location?: string;
}

const Button = (props: ButtonProps) => {
  const {
    styles,
    text,
    type = "button",
    disabled,
    onclick,
    isLink,
    location,
  } = props;
  return (
    <motion.button
      onClick={() => {
        if (onclick) onclick();
      }}
      disabled={disabled}
      type={type}
      className={`${styles} bg-[#BF9F61] text-white py-3 px-3 md:py-4 md:px-6 font-poppins font-medium text-[14px] 
    rounded-[10px] outline-none `}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
    >
      {isLink ? <a href={`#${location}`}>{text}</a> : text}
    </motion.button>
  );
};

export default Button;
