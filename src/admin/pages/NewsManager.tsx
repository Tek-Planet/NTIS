import { BlogCardItem, CreateNewsModal } from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { fetchNews } from "../../rtk/features/news/newsSlice";
import { CustomLoader } from "../../components";
import { plus } from "../../assets";

const NewsManager = () => {
  let navigate = useNavigate();
  const { news, isFetching } = useAppSelector((state) => state.news);
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
              <BlogCardItem key={item.id} onClick={() => {}} item={item} />
            ))}
          </div>
        )}
        {/* create new button  */}
        <CreateNewsModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default NewsManager;
