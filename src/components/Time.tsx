
import {WiTime8} from "react-icons/wi"
import {HiMail} from "react-icons/hi"
import {TfiYoutube} from "react-icons/tfi"
import {RiGoogleFill} from "react-icons/ri"
import {FaFacebookF, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import styles from "../style";

const Navbar = () => {


  return (
    <nav className={`${styles.paddingX}w-full flex hidden lg:flex lg:block py-4 justify-between items-center border-b border-gray-300`}>
      <div className="flex flex-row items-center space-x-1">
        <WiTime8 />
        <p className="text-[12px] text-gray-500">Mon - Fri : 08:00 - 16:00</p>
        <p><HiMail /></p>
        <p className="text-[12px] text-gray-500">support@lautech.edu.ng</p>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between items-center space-x-3">
          <li><FaFacebookF size={12}/></li>
          <li><FaTwitter  size={12}/></li>
          <li><TfiYoutube  size={12}/></li>
          <li><FaLinkedinIn  size={12}/></li>
          <li><RiGoogleFill  size={12}/></li>
        </ul>
      </div>
     
    
      
    </nav>
  );
};

export default Navbar;
