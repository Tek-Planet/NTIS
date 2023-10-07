import { BlogCardItem } from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { fetchNews } from "../../rtk/features/news/newsSlice";
import { CustomLoader } from "../../components";

const Blog = () => {
  let navigate = useNavigate();
  const { news, isFetching } = useAppSelector((state) => state.news);

  const dispatch = useAppDispatch();

  const handleNavigate = (item: any) => {
    navigate(`/aboutus/news/${item.title}`, {
      state: { state: item },
    });
  };

  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews());
  }, []);

  return (
    <div id="clients" className={` flex flex-col relative mt-4 `}>
      <div className="   sm:mb-10 mb-6 ">
        <p className={`  ${styles.heading2} text-center  te`}>Latest Update</p>
      </div>

      {isFetching && <CustomLoader />}

      {news && (
        <div className={`flex flex-wrap mt-2`}>
          {news.map((item) => (
            <BlogCardItem key={item.id} onClick={() => {}} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
