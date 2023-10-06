import { BlogCardItem } from "../../components/admin";
import { news } from "../../constants";
import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

const Blog = () => {
  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/aboutus/news/${item.title}`, {
      state: { state: item },
    });
  };

  return (
    <div id="clients" className={` flex flex-col relative mt-4 `}>
      <div className="   sm:mb-10 mb-6 ">
        <p className={`  ${styles.heading2} text-center  te`}>Latest Update</p>
      </div>

      <div className={`flex flex-wrap mt-2`}>
        {news.map((item) => (
          <BlogCardItem onClick={() => {}} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
