import { useState } from "react";
import { Button, CustomTextInput } from "../components";
import styles from "../style";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary h-full w-full overflow-hidden"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 35 }}
          >
            <p
              className={` ${styles.heading2} p-5 text-backgroudgreen text-center`}
            >
              Contact Us
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 35 }}
            className="flex flex-1  content-center items-center justify-center "
          >
            <div className=" flex flex-col w-full gap-4 bg-white max-w-lg my-4 lg:px-14 rounded-lg p-6 shadow-md  items-center">
              <h2 className={`${styles.textSize} font-poppins font-bold `}>
                Write Us
              </h2>

              <CustomTextInput
                name="name"
                placeholder="Full Name"
                inputType="text"
                value={email}
                handleChange={setEmail}
              />

              <CustomTextInput
                name="email"
                placeholder="Your Email"
                inputType="text"
                value={email}
                handleChange={setEmail}
              />

              <CustomTextInput
                name="body"
                placeholder="Message"
                inputType="text"
                isTextArea={true}
                value={body}
                handleChange={setBody}
              />
              <Button
                onclick={() => {
                  alert("welcome");
                }}
                styles={"text-primary w-full p-2"}
                text="Submit"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
