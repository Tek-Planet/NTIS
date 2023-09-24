import { useState, useRef } from "react";
import { feedback } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { ServiceCardItem } from ".";

const Testimonials = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div id="clients" className={` flex flex-col relative ${styles.marginY} `}>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" /> */}

      <div className="   sm:mb-10 mb-6 ">
        <p className={`text-white ${styles.heading2} text-center `}>
          The Network's Impact
        </p>
      </div>

      {/* <div className="flex flex-wrap sm:justify-start justify-center  w-full feedback-container relative z-[1]"> */}
      <Slider ref={sliderRef} {...settings}>
        <ServiceCardItem item={feedback[0]} />
        <ServiceCardItem item={feedback[1]} />
        <ServiceCardItem item={feedback[2]} />
      </Slider>
      {/* </div> */}
      {/* <div className="flex gap-10 items-center justify-center mt-5">
        <ImageButton image={prev} onClick={previous} />
        <ImageButton image={next} onClick={nextSlide} />
      </div> */}
    </div>
  );
};

export default Testimonials;
