import { Link, NavLink } from "react-router-dom";
import { logo, menu } from "../../assets";
import { motion } from "framer-motion";
import { hoverVariant } from "../../variants";
import { adminNavLinks } from "../../constants";
import { useAppSelector, useAppDispatch } from "../../rtk/hooks";
import { setActiveMenu } from "../../rtk/features/user/userSlice";

const Sidebar = () => {
  const { screenSize, activeMenu } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      dispatch(setActiveMenu(false));
    }
  };
  const activeLink =
    "font-poppins font-bold cursor-pointer  hover:text-backgroudgreen text-buttongreen";
  const normalLink =
    "font-poppins font-normal cursor-pointer  hover:text-linkactive ";

  return (
    <div
      style={{ zIndex: 100 }}
      className=" h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  shadow-lg "
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/app"
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight "
            >
              <img className="h-8 w-8" src={logo} alt="logo" />
              <span>STI MIS</span>
            </Link>

            <button
              type="button"
              onClick={() => dispatch(setActiveMenu(!activeMenu))}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <motion.img
                variants={hoverVariant}
                whileHover={"hover"}
                src={menu}
                alt="menu"
              />
            </button>
          </div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 35 }}
            className=" "
          >
            <ul className="flex flex-col list-none gap-5 p-5 pt-14">
              {adminNavLinks.map((nav) => {
                return (
                  <motion.li
                    whileHover={{
                      scale: 1.2,
                      originX: 0,
                      color: "#FF9810",
                    }}
                    transition={{ type: "spring", stiffness: 150 }}
                    key={nav.id}
                  >
                    <NavLink
                      to={`/${nav.id}`}
                      onClick={handleCloseSideBar}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span className="capitalize  text-sm ">{nav.title}</span>
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
