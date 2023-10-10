import { CreateTechnologyModal } from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomDropDown, CustomLoader, TechnologyCard } from "../../components";
import { plus } from "../../assets";

import { fetchTechnology } from "../../rtk/features/technology/technologySlice";
import { technologyMenu } from "../../constants";
import { Menus } from "../../types";

const TechnologyManager = () => {
  let navigate = useNavigate();
  const { technology, isFetching } = useAppSelector(
    (state) => state.technology
  );
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [publicationKind, setPublicationKind] = useState<Menus>({
    id: "all",
    title: "All",
  });

  const [filteredList, setFiltered] = useState<any[]>([]);

  const [filter, setfilter] = useState<string>("");

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

  // useEffect(() => {
  //   if (publicationKind.title === "All") setfilter("");
  //   else setfilter(publicationKind.title);
  // }, [publicationKind]);

  useEffect(() => {
    if (technology.length > 0) {
      // Use the name to filter items in the technology list
      const newList: any = technology.filter((item) =>
        item.publicationKind.includes(publicationKind.title)
      );

      // Set the filtered list in the state
      setFiltered(newList);
    }
  }, [publicationKind, technology]);

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
        <div className="flex flex-col md:flex-row  sm:mb-10 mb-6 ">
          <p className={`  ${styles.heading2} text-center  te`}>Technologies</p>
          <div className="w-full  lg:max-w-md">
            <CustomDropDown
              selected={publicationKind}
              setSelected={setPublicationKind}
            />
          </div>
        </div>

        {isFetching && <CustomLoader />}

        {filteredList?.length > 0 && (
          <div className={`flex flex-wrap mt-2`}>
            {filteredList.map((item: any) => {
              return (
                <TechnologyCard key={item.id} onClick={() => {}} item={item} />
              );
            })}
          </div>
        )}
        <div>
          {!isFetching && filteredList?.length === 0 && (
            <p className={`${styles.textSize} m-3`}>Nothing to see here</p>
          )}
        </div>
        {/* create new button  */}
        <CreateTechnologyModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default TechnologyManager;
