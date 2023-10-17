import styles from "../style";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchTechnology } from "../rtk/features/technology/technologySlice";
import { useAppSelector, useAppDispatch } from "../rtk/hooks";

import { CustomLoader, TechnologyCard } from "../components";
import { useParams } from "react-router-dom";
import { handleOpenLinkInNewTab } from "../constants";

const Agriculture = () => {
  const { technology, isFetching } = useAppSelector(
    (state) => state.technology
  );

  const dispatch = useAppDispatch();

  const [filteredList, setFiltered] = useState<any[]>([]);

  const { name = "Agriculture and food processing" } = useParams();

  useEffect(() => {
    if (technology.length === 0) {
      dispatch(fetchTechnology());
    }
  }, []);

  useEffect(() => {
    if (technology.length > 0) {
      // Use the name to filter items in the technology list
      const newList: any = technology.filter((item) =>
        item.publicationKind.includes(name)
      );

      // Set the filtered list in the state
      setFiltered(newList);
    }
  }, [name, technology]);

  const handleNavigate = (item: any) => {
    handleOpenLinkInNewTab(item.source);
  };

  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 35 }}
      className={`flex flex-col mt-5  mx-0 lg:ml-10`}
    >
      {isFetching && <CustomLoader />}

      {filteredList?.length > 0 && (
        <div className={`flex flex-wrap mt-2`}>
          {filteredList.map((item) => (
            <TechnologyCard
              key={item.id}
              onClick={handleNavigate}
              item={item}
              onDelete={() => {}}
              onEdit={() => {}}
            />
          ))}
        </div>
      )}

      {!isFetching && filteredList?.length === 0 && (
        <p className={`${styles.textSize} mt-2 font-light opacity-50`}>
          Nothing to see here
        </p>
      )}
    </motion.div>
  );
};

export default Agriculture;
