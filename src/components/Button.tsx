import { motion } from "framer-motion";

interface ButtonProps {
  styles?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onclick?: () => void;
  isLink?: boolean;
  location?: string;
}

const Button = (props: ButtonProps) => {
  let {
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
      className={`bg-buttongreen py-3 px-3 md:py-4 md:px-6 font-poppins font-medium text-[14px] 
    rounded-[10px] outline-none ${styles}`}
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
