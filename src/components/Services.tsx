import { useRef } from "react";
import { services } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { ServiceCardItem } from ".";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const sliderRef = useRef(null);
  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/services/${item.title}`, {
      state: { state: item },
    });
  };

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
          className="flex flex-row max-w-[600px] align-middle justify-items-center"
        >
          <p className={`${styles.textSize} px-5  my-3 sm:px-0 text-center`}>
            We offer comprehensive research and data services driven by our
            mission to provide accessible, trustworthy information. Our
            commitment to reliability empowers individuals, researchers, and
            decision-makers with valuable insights, fostering informed decisions
            and positive societal change. Explore our services to access the
            knowledge you need for a brighter future.
          </p>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <ServiceCardItem onClick={handleNavigate} item={services[0]} />
        <ServiceCardItem onClick={handleNavigate} item={services[1]} />
        <ServiceCardItem onClick={handleNavigate} item={services[2]} />
      </Slider>
    </div>
  );
};

export default Services;
