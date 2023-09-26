import styles from "../style";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { aboutsMenu, navLinks } from "../constants";

const AboutUs = () => {
  const activeLink =
    "font-poppins font-normal cursor-pointer  hover:text-backgroudgreen text-b";
  const normalLink =
    "font-poppins font-normal cursor-pointer  hover:text-linkactive ";

  return (
    <motion.div
      transition={{
        when: "beforeChildren",
        staggerChildren: 2,
      }}
      className="bg-primary w-full overflow-hidden"
    >
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`flex flex-col md:flex-row ${styles.marginX} `}>
            {/* rigth */}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              className="flex md:max-w-[190px] w-full bg-slate-300"
            >
              <ul className="flex flex-col list-none gap-5 p-5">
                {aboutsMenu.map((nav, index) => {
                  return (
                    <motion.li
                      whileHover={{
                        scale: 1.2,
                        originY: 0,
                        color: "#FF9810",
                      }}
                      transition={{ type: "spring", stiffness: 150 }}
                      key={nav.id}
                    >
                      <NavLink
                        to={`/${nav.id}`}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <span className="capitalize  text-sm ">
                          {nav.title}
                        </span>
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* left */}
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 35 }}
              className="flex flex-1 w-full  "
            >
              <Outlet />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
