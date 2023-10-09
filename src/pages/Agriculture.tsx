import styles from "../style";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { fetchTechnology } from "../rtk/features/technology/technologySlice";
import { useAppSelector, useAppDispatch } from "../rtk/hooks";
import { BlogCardItem } from "../components/admin";
import { CustomLoader, TechnologyCard } from "../components";

const Agriculture = () => {
  const { technology, isFetching } = useAppSelector(
    (state) => state.technology
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (technology.length === 0) {
      dispatch(fetchTechnology());
    }
  }, []);
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:ml-10`}
    >
      <div className="flex flex-col   "></div>
      {isFetching && <CustomLoader />}

      {technology && (
        <div className={`flex flex-wrap mt-2`}>
          {technology.map((item) => (
            <TechnologyCard key={item.id} onClick={() => {}} item={item} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Agriculture;
