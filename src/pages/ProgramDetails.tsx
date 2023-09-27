import { infoPartners, NTISList } from "../constants";
import styles from "../style";

import { NTISCardItem } from "../components";
import { motion } from "framer-motion";

const ProgramDetails = () => {
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:mx-10`}
    >
      <div className="flex flex-col gap-3  ">
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <p
            className={` font-poppins font-semibold md:text-[33px] text-[25px] md:leading-[38.5px] leading-[30px]  text-buttongreen`}
          >
            ProgramDetails
          </p>
        </div>

        <p className={`${styles.textSize} mt-2 font-light`}>
          It enhances national R&D investment efficiency and research
          productivity by sharing and jointly utilizing information related to
          national R&D programs, and science and technology information, which
          are separately managed by ministries and institutes.
        </p>

        <p className={`${styles.textSize} mt-2 font-bold`}>
          Improvement of national R&D investment efficiency
        </p>

        <p className={`${styles.textSize} mt-2 font-light`}>
          It supports evidence-based R&D planning by providing reference data
          for policy making, provides transparent information on national R&D
          program and institute performance evaluations, and prevents duplicated
          expenditure on national R&D budgets.
        </p>

        <p className={`${styles.textSize} mt-2 font-bold`}>
          Support for improving research productivity
        </p>

        <p className={`${styles.textSize} mt-2 font-light`}>
          It provides recommendations of user-customized information, supports
          management of R&D outcomes, and also provides current status of
          national R&D, customized information package, latest research trends,
          and real-time analytical environment of national R&D.
        </p>

        <p className={`${styles.textSize} mt-2 font-bold`}>Legal grounds</p>

        <p className={`${styles.textSize} mt-2 font-light`}>
          Article 26 (management and distribution of knowledge, information,
          etc. on science and technology) of the framework act on science and
          technology; Article 40 (establishment of management and distribution
          systems for Knowledge and information related to science and
          technology) of the enforcement decree of the same act; and Article 25
          (management of research and development Information) of the regulation
          on the management etc. of national research and development
        </p>

        <p className={`${styles.textSize} mt-2 font-normal`}>
          Projects Program Period: 2006~
        </p>
      </div>
    </motion.div>
  );
};

export default ProgramDetails;
