import { externalLinks, handleOpenLinkInNewTab } from "../constants";
import styles from "../style";
import Slider from "react-slick";
import { GeneralListModel } from "../types";

interface LogoItemProps {
  item: GeneralListModel;
}

const LogoItem = ({ item }: LogoItemProps) => {
  return (
    <div
      className="cursor-pointer"
      onClick={() => handleOpenLinkInNewTab(item.id)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="h-[150px] w-[80%] object-contain "
      />
    </div>
  );
};
const Partners = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,

    // arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 620,
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
    <section className={` my-4 ${styles.marginY}`}>
      <p className={` ${styles.heading2} text-center text-linkactive mb-10`}>
        Our Partners
      </p>

      <Slider {...settings}>
        <LogoItem item={externalLinks[0]} />
        <LogoItem item={externalLinks[1]} />
        <LogoItem item={externalLinks[2]} />
        <LogoItem item={externalLinks[3]} />
        <LogoItem item={externalLinks[4]} />
        <LogoItem item={externalLinks[5]} />
      </Slider>
    </section>
  );
};
export default Partners;
