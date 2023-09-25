import styles from "../style";
import { facebook, instagram, logo, twitter } from "../assets";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <section className={`  ${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        {/* first potion */}
        <div className="flex-[0.8] flex  justify-center w-full  md:justify-start mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
        </div>

        {/* second  */}
        <div className="flex-[1.8] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className={`flex  flex-col md:my-0 my-4 max-w-[350px]`}>
            <h4 className="font-poppins font-light text-white opacity-70 leading-[27px] mb-2 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisis tellus ut urna suscipit vulputate. Donec dolor sapien,
              consectetur non. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </h4>
          </div>

          <div className={` ss:my-0 my-4 min-w-[100px]`}>
            {navLinks.map((footerlink) => (
              <h4
                key={footerlink.title}
                className="font-poppins text-white font-medium text-[18px] leading-[27px] mb-2 "
              >
                {footerlink.title}
              </h4>
            ))}
          </div>

          {/* third */}
          <div className={`flex gap-2 md:my-0  min-w-[100px]`}>
            <img src={facebook} alt="fb" className=" object-contain" />
            <img src={twitter} alt="fb" className=" object-contain" />
            <img src={instagram} alt="fb" className=" object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
