import { CreateTechnologyModal } from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomLoader, TechnologyCard } from "../../components";
import { plus } from "../../assets";

import { fetchTechnology } from "../../rtk/features/technology/technologySlice";

const TechnologyManager = () => {
  let navigate = useNavigate();
  const { technology, isFetching } = useAppSelector(
    (state) => state.technology
  );
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleNavigate = (item: any) => {
    navigate(`/aboutus/news/${item.title}`, {
      state: { state: item },
    });
  };

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (technology.length === 0) {
      dispatch(fetchTechnology());
    }
  }, []);

  return (
    <div className="flex flex-col relative">
      <div className="fixed flex  items-center  right-4 bottom-5  bg-buttongreen rounded-full h-10 w-10 md:h-14 sm:w-14 border-2 z-50">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={plus} />
        </button>
      </div>
      <div id="clients" className={` flex  flex-col  mt-4  `}>
        <div className="   sm:mb-10 mb-6 ">
          <p className={`  ${styles.heading2} text-center  te`}>Technologies</p>
        </div>

        {isFetching && <CustomLoader />}
        {/* 
        <Button
          text="click me"
          onclick={() => {
            saveBlog();
          }}
        /> */}

        {technology && (
          <div className={`flex flex-wrap mt-2`}>
            {technology.map((item) => (
              <TechnologyCard key={item.id} onClick={() => {}} item={item} />
            ))}
          </div>
        )}
        {/* create new button  */}
        <CreateTechnologyModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default TechnologyManager;
