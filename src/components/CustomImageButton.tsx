import { motion } from "framer-motion";

type Props = {
  image: string;
  onclick: Function;
};

const CustomImageButton = (props: Props) => {
  const { image, onclick } = props;
  return (
    <motion.button
      onClick={() => onclick()}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
    >
      <img src={image} className="h-6" />
    </motion.button>
  );
};

export default CustomImageButton;
