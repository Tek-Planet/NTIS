import styles from "../../style";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomLoader } from "../../components";
import { pencil } from "../../assets";

import { DashBoardModal } from "../../components/admin";
import { fetchDashboard } from "../../rtk/features/dashBoard/dashBoardSlice";
import { isObjectEmpty } from "../../constants";

const Dashboard = () => {
  const { dashboardItem, isFetching } = useAppSelector(
    (state) => state.dashboard
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  // fetch data if need be
  useEffect(() => {
    if (isObjectEmpty(dashboardItem)) dispatch(fetchDashboard());
  }, []);

  return (
    <div className="flex flex-col relative">
      {isFetching && <CustomLoader />}
      <div className="fixed flex  items-center  right-4 bottom-5  bg-buttongreen rounded-full h-10 w-10 md:h-14 sm:w-14 border-2 z-50">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={pencil} />
        </button>
      </div>
      <div id="clients" className={` flex  flex-col  mt-4  `}>
        <div className="   sm:mb-10 mb-6 ">
          <p className={`  ${styles.heading2} text-center  te`}>Dashboard</p>
          {/* hero txt */}
          <p className={`${styles.textSize} mt-2 font-bold `}>Hero Text</p>
          <p className={`${styles.textSize} mt-2 font-light `}>
            {dashboardItem?.title}
          </p>
          {/* sub hero Text */}

          <p className={`${styles.textSize} mt-2 font-bold `}>Sub Hero Text</p>
          <p className={`${styles.textSize} mt-2 font-light `}>
            {dashboardItem?.subTitle}
          </p>

          {/* image */}
          <div
            className={`bg-center bg-cover h-[80vh] my-6  rounded-2xl w-full`}
            style={{ backgroundImage: `url(${dashboardItem?.image})` }}
          ></div>
        </div>

        {/* create new button  */}
        {isOpen && <DashBoardModal isOpen={isOpen} closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Dashboard;
