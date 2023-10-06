import { useState } from "react";
import { CustomError, CustomLoader, CustomTextInput } from "../../components";
import styles from "../../style";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auths } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { state } = useLocation();
  let navigate = useNavigate();

  const signIn = async (e: any) => {
    e.preventDefault();
    if (email === null) {
      setError("Email is required");
      return;
    }

    if (password === null) {
      setError("Password is required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      var res = await signInWithEmailAndPassword(auths, email, password);
      const user = res.user;

      // set header
      navigate(state?.prev ? state?.prev : "/dashboard");
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      if (error.code === "auth/user-not-found") {
        setError("There is no user record corresponding to this mail!");
      }

      if (error.code === "auth/invalid-email") {
        setError("invalid login details!");
      }

      if (error.code === "auth/wrong-password") {
        setError("invalid login details!");
      }
    }
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
              Welcome Back
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 35 }}
            className="flex flex-1  content-center items-center justify-center "
          >
            {loading && <CustomLoader />}
            <form
              onSubmit={signIn}
              className=" flex flex-col w-full gap-4 bg-white max-w-lg my-4 lg:px-14 rounded-lg p-6 shadow-md  items-center"
            >
              <h2 className={`${styles.textSize} font-poppins font-bold `}>
                Login Below
              </h2>

              <CustomTextInput
                required
                name="name"
                placeholder="Email"
                inputType="text"
                value={email}
                handleChange={setEmail}
              />

              <CustomTextInput
                required
                name="email"
                placeholder="Password"
                inputType="password"
                value={password}
                handleChange={setPassword}
              />

              {error.length > 0 && <CustomError error={error} />}

              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                type="submit"
                className={`bg-buttongreen w-full py-2 px-3 md:py-4 md:px-6 font-poppins font-medium text-[15px]  text-white
                  rounded-[10px] outline-none`}
              >
                Sign In
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
