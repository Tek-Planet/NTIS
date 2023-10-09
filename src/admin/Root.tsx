import { Outlet } from "react-router-dom";

import { Navbar, Sidebar } from "../components/admin";
import { useAppSelector } from "../rtk/hooks";

type Props = {};

function Root({}: Props) {
  const { activeMenu } = useAppSelector((state) => state.user);

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-48 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 ">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu ? " bg-red md:ml-48 w-full  " : "bg-red w-full  flex-2 "
        }
      >
        <Navbar />

        <div className="p-3">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Root;
