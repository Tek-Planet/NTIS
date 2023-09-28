import { useRef } from "react";
import { feedback, lastest } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { BlogCardItem, ServiceCardItem } from ".";

const Blog = () => {
  const sliderRef = useRef(null);

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

          // infinite: false,
          // dots: true,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div id="clients" className={` flex flex-col relative ${styles.marginY} `}>
      <div className="   sm:mb-10 mb-6 ">
        <p className={` text-white ${styles.heading2} text-center `}>
          Latest Update
        </p>
      </div>
      <Slider className="md:m-28 md:mt-4" ref={sliderRef} {...settings}>
        <BlogCardItem item={lastest[2]} />
        <BlogCardItem item={lastest[0]} />
        <BlogCardItem item={lastest[0]} />
      </Slider>
    </div>
  );
};

export default Blog;
