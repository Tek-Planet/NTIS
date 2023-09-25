import { useRef } from "react";
import { feedback } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { ServiceCardItem } from ".";

const Services = () => {
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

  return (
    <div id="clients" className={`flex flex-col  ${styles.marginY} `}>
      <div className="flex flex-col items-center sm:mb-10 mb-6 ">
        <p className={` ${styles.heading2} text-center text-linkactive`}>
          Our Services
        </p>
        <div
          id="center"
          className="flex flex-row max-w-lg align-middle justify-items-center"
        >
          <p className="font-poppins font-normal text-[12px] sm:text-[14px] ] my-5  text-center ">
            Lorem ipsum dolor sit amet consectetur. Tortor viverra quam justo
            quis varius sodales at mauris et. Ipsum vel senectus mauris augue
            massa. Sapien pulvinar molestie orci senectus pellentesque aliquet.
            Tincidunt diam pellentesque nulla amet pretium ac nisl.
          </p>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <ServiceCardItem item={feedback[0]} />
        <ServiceCardItem item={feedback[1]} />
        <ServiceCardItem item={feedback[2]} />
      </Slider>
    </div>
  );
};

export default Services;
