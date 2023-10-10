import { ConfirmationModal, CreateGalleryModal } from "../../components/admin";

import styles from "../../style";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomLoader, GalleryCardItem } from "../../components";
import { plus } from "../../assets";
import {
  deleteGallery,
  fetchGallery,
} from "../../rtk/features/gallery/gallerySlice";
import { useAlert } from "react-alert";
import { GalleryModel } from "../../types";

const GalleryManager = () => {
  const { gallery, isFetching } = useAppSelector((state) => state.gallery);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [confirmModal, setConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);
  const alert = useAlert();

  const handleDelete = async (item: GalleryModel) => {
    try {
      setConfirmModal(false);
      await dispatch(deleteGallery(item));
      alert.show("item Deleted!", { type: "success" });
    } catch (error) {
      alert.show("Unable to delete item!", { type: "error" });
    }
  };

  function closeModal() {
    setIsOpen(false);
    setConfirmModal(false);
  }

  useEffect(() => {
    if (gallery.length === 0) {
      dispatch(fetchGallery());
    }
  }, []);
  // <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
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
          <p className={`  ${styles.heading2} text-center  te`}>Gallery</p>
        </div>

        {/* <Button
          text="click me"
          onclick={() => {
            saveBlog();
          }}
        /> */}

        {isFetching && <CustomLoader />}

        {gallery && (
          <div className={`flex flex-wrap mt-2`}>
            {gallery.map((item) => (
              <GalleryCardItem
                onDelete={() => {
                  setConfirmModal(true);
                  setItemToDelete(item);
                }}
                key={item.id}
                item={item}
              />
            ))}
          </div>
        )}
        {/* create new button  */}
        {isOpen && (
          <CreateGalleryModal isOpen={isOpen} closeModal={closeModal} />
        )}
        {confirmModal && (
          <ConfirmationModal
            isOpen={confirmModal}
            closeModal={closeModal}
            onContinue={() => handleDelete(itemToDelete)}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryManager;
