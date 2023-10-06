import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../components/admin";

type Props = {};

function Root({}: Props) {
  const activeMenu = true;
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-48 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? " bg-main-bg  md:ml-48 w-full  "
            : "bg-main-bg  w-full  flex-2 "
        }
      >
        <Navbar />

        <div>
          {/* where the childeren elements will be displayed */}

          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Root;
