import { useRef } from "react";

import styles from "../style";

import Slider from "react-slick";
import { BlogCardItem } from ".";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../rtk/hooks";

const Blog = () => {
  const { news } = useAppSelector((state) => state.news);

  const sliderRef = useRef(null);

  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/aboutus/news/${item.title}`, {
      state: { state: item },
    });
  };

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="clients" className={` flex flex-col relative ${styles.marginY} `}>
      <div className="   sm:mb-10 mb-6 ">
        <p className={` text-white ${styles.heading2} text-center `}>
          Latest Update
        </p>
      </div>
      {news.length > 0 && (
        <Slider className="md:m-28 md:mt-4" ref={sliderRef} {...settings}>
          <BlogCardItem
            onClick={() => handleNavigate(news[0])}
            item={news[0]}
          />
          <BlogCardItem
            onClick={() => handleNavigate(news[0])}
            item={news[1]}
          />
          <BlogCardItem
            onClick={() => handleNavigate(news[0])}
            item={news[3]}
          />
          <BlogCardItem
            onClick={() => handleNavigate(news[0])}
            item={news[7]}
          />
          {/* <BlogCardItem item={news[4]} /> */}
        </Slider>
      )}
    </div>
  );
};

export default Blog;
