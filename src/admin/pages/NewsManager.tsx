import {
  BlogCardItem,
  ConfirmationModal,
  CreateNewsModal,
} from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { deleteNews, fetchNews } from "../../rtk/features/news/newsSlice";
import { CustomLoader } from "../../components";
import { plus } from "../../assets";
import { NewModel } from "../../types";

const NewsManager = () => {
  let navigate = useNavigate();
  const { news, isFetching } = useAppSelector((state) => state.news);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [itemToModify, setItemToModify] = useState<any>(null);

  const dispatch = useAppDispatch();

  const handleNavigate = (item: NewModel) => {
    navigate(`/app/news/${item.title}`, {
      state: { state: item, type: "news" },
    });
  };

  const handleDelete = async (item: NewModel) => {
    setConfirmModal(false);
    var response = await dispatch(deleteNews(item));
    console.log(response.payload);
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
    if (news.length === 0) dispatch(fetchNews());
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
          <p className={`  ${styles.heading2} text-center  te`}>
            Latest Update
          </p>
        </div>

        {isFetching && <CustomLoader />}

        {news && (
          <div className={`flex flex-wrap mt-2`}>
            {news.map((item) => (
              <BlogCardItem
                key={item.id}
                onClick={handleNavigate}
                item={item}
                onDelete={() => {
                  setConfirmModal(true);
                  setItemToModify(item);
                }}
                onEdit={() => {
                  handleEdit(item);
                }}
              />
            ))}
          </div>
        )}
        {/* create new button  */}
        {isOpen && (
          <CreateNewsModal
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

export default NewsManager;
