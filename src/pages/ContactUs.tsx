import { useState } from "react";
import { Button, CustomLoader, CustomTextInput } from "../components";
import styles from "../style";
import { motion } from "framer-motion";
import { MessageModel } from "../types";
import { addMessage } from "../rtk/features/message/messageSlice";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import { useAlert } from "react-alert";

const ContactUs = () => {
  const { isLoading } = useAppSelector((state) => state.message);

  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const body: MessageModel = {
      name,
      email,
      content,
      createdAt: new Date().getTime(),
    };
    let response: any = await dispatch(addMessage(body));
    if (!response.payload) {
      alert.show("Unable to send your message please try again later", {
        type: "error",
      });
      return;
    }

    alert.show("Message sent", {
      type: "success",
    });
    setContent("");
    setEmail("");
    setEmail("");
  };

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
            {isLoading && <CustomLoader />}

            <form onSubmit={onSubmit}>
              <div className=" flex flex-col w-full gap-4 bg-white max-w-lg my-4 lg:px-14 rounded-lg p-6 shadow-md  items-center">
                <h2 className={`${styles.textSize} font-poppins font-bold `}>
                  Write Us
                </h2>

                <CustomTextInput
                  placeholder="Full Name"
                  inputType="text"
                  value={name}
                  handleChange={setName}
                />

                <CustomTextInput
                  placeholder="Your Email"
                  inputType="text"
                  value={email}
                  handleChange={setEmail}
                />

                <CustomTextInput
                  placeholder="Message"
                  inputType="text"
                  isTextArea={true}
                  value={content}
                  handleChange={setContent}
                />
                <Button
                  type="submit"
                  styles={"text-primary w-full p-2"}
                  text="Submit"
                />
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
