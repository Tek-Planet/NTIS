import styles from "../style";
import { arrowup, facebook, instagram, logo, twitter } from "../assets";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section
      className={`  ${styles.flexCenter} ${styles.paddingY} flex-col relative`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        {/* first potion */}
        <div className="flex-[0.4] flex justify-center w-full md:justify-start mr-10">
          <img src={logo} alt="hoobank" className="w-32 h-32" />
        </div>

        {/* second  */}
        <div className="flex-[1.8] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className={`flex  flex-col md:my-0 my-4 max-w-[350px]`}>
            <h4 className="font-poppins font-light text-white text-[14px] opacity-70 leading-[27px] mb-2 ">
              Post Office Box M232 Ministries, Accra Ghana
            </h4>

            <h4 className="font-poppins font-light text-white text-[14px] opacity-70 leading-[27px] mb-2 ">
              Digital Address: GA-107-3073
            </h4>

            <h4 className="font-poppins font-light text-white text-[14px] opacity-70 leading-[27px] mb-2 ">
              Email : info@mesti.gov.gh
            </h4>

            <h4 className="font-poppins font-light text-white text-[14px] opacity-70 leading-[27px] mb-2 ">
              Tel : +233 302-662626 | +233 303-963 459
            </h4>
          </div>

          <div className={`flex flex-col ss:my-0 min-w-[100px]`}>
            {navLinks.map((footerlink) => (
              <NavLink
                to={`/${footerlink.id}`}
                key={footerlink.title}
                className="font-poppins text-white opacity-70 font-medium text-[18px] leading-[27px] mb-2 "
              >
                {footerlink.title}
              </NavLink>
            ))}
          </div>

          {/* third */}
          <div className={`flex gap-2 md:my-0  min-w-[100px]`}>
            <img src={facebook} alt="fb" className=" object-contain" />
            <img src={twitter} alt="fb" className=" object-contain" />
            <img src={instagram} alt="fb" className=" object-contain" />
          </div>
        </div>
        {/* big screen */}
        <div
          onClick={() => {}}
          className=" flex absolute  items-center  justify-center right-0 sm:right-10  top-[-18px]  sm:top-[-30px] bg-buttongreen  rounded-full h-10 w-10 md:h-14 sm:w-14 border-2"
        >
          <a href={`#home`}>
            <img src={arrowup} />
          </a>
        </div>
        {/* mobile */}
      </div>
    </section>
  );
};

export default Footer;
