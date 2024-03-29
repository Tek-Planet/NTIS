import {
  ConfirmationModal,
  CreateTechnologyModal,
} from "../../components/admin";

import styles from "../../style";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomDropDown, CustomLoader, TechnologyCard } from "../../components";
import { plus } from "../../assets";

import {
  deleteTechnology,
  fetchTechnology,
} from "../../rtk/features/technology/technologySlice";
import { Menus, NewModel } from "../../types";
import { useAlert } from "react-alert";
import { handleOpenLinkInNewTab } from "../../constants";

const TechnologyManager = () => {
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
  const [confirmModal, setConfirmModal] = useState(false);
  const [itemToModify, setItemToModify] = useState<any>(null);
  const alert = useAlert();

  const handleNavigate = (item: any) => {
    handleOpenLinkInNewTab(item.source);
  };

  useEffect(() => {
    if (technology.length === 0) {
      dispatch(fetchTechnology());
    }
  }, []);

  const handleDelete = async (item: NewModel) => {
    try {
      setConfirmModal(false);
      await dispatch(deleteTechnology(item));
      alert.show("item Deleted!", { type: "success" });
    } catch (error) {
      alert.show("Unable to delete item!", { type: "error" });
    }
  };

  const handleEdit = async (item: NewModel) => {
    setItemToModify(item);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
    setConfirmModal(false);
    setItemToModify(null);
  }

  useEffect(() => {
    if (technology.length > 0) {
      // Use the name to filter items in the technology list
      const newList: any =
        publicationKind.title === "All"
          ? technology
          : technology.filter((item) =>
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
          <p className={`  ${styles.heading2} text-center  te`}>
            Technology Areas
          </p>
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
                <TechnologyCard
                  key={item.id}
                  onClick={() => handleNavigate(item)}
                  item={item}
                  onDelete={() => {
                    setConfirmModal(true);
                    setItemToModify(item);
                  }}
                  onEdit={() => {
                    handleEdit(item);
                  }}
                  isAdmin
                />
              );
            })}
          </div>
        )}
        <div>
          {!isFetching && filteredList?.length === 0 && (
            <p className={`${styles.textSize} m-3`}>
              Nothing post under {publicationKind.title}
            </p>
          )}
        </div>
        {/* create new button  */}
        {isOpen && (
          <CreateTechnologyModal
            item={itemToModify}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        )}
        {confirmModal && (
          <ConfirmationModal
            isOpen={confirmModal}
            closeModal={closeModal}
            onContinue={() => handleDelete(itemToModify)}
          />
        )}
      </div>
    </div>
  );
};

export default TechnologyManager;
