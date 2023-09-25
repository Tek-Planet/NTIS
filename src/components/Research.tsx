import { useRef } from "react";
import { feedback } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { ResearchCardItem } from ".";

const Research = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // rtl: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: false,
          // dots: true,
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

  return (
    <div id="clients" className={`flex flex-col  ${styles.marginY} `}>
      <div className="flex flex-col items-center sm:mb-10 mb-6 ">
        <p className={` ${styles.heading2} text-center text-linkactive `}>
          Research Firm Data
        </p>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <ResearchCardItem item={feedback[0]} />
        <ResearchCardItem item={feedback[1]} />
        <ResearchCardItem item={feedback[2]} />
      </Slider>
    </div>
  );
};

export default Research;
