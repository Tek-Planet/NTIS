import { BlogCardItem, CreateProjectModal } from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { fetchNews } from "../../rtk/features/news/newsSlice";
import { Button, CustomLoader } from "../../components";
import { plus } from "../../assets";
import { saveBlog } from "../handlers/api";
import { fetchProjects } from "../../rtk/features/project/projectSlice";

const ProjectsManager = () => {
  let navigate = useNavigate();
  const { projects, isFetching } = useAppSelector((state) => state.project);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleNavigate = (item: any) => {
    navigate(`/aboutus/news/${item.title}`, {
      state: { state: item },
    });
  };

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (projects.length === 0) dispatch(fetchProjects());
  }, []);
  // <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
  return (
    <div className="flex flex-col relative">
      <div className="fixed flex  items-center  right-4 bottom-5  bg-buttongreen rounded-full h-10 w-10 md:h-14 sm:w-14 border-2 z-50">
        <button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={plus} />
        </button>
      </div>
      <div id="clients" className={` flex  flex-col  mt-4  `}>
        <div className="   sm:mb-10 mb-6 ">
          <p className={`  ${styles.heading2} text-center  te`}>Projects</p>
        </div>

        {/* <Button
          text="click me"
          onclick={() => {
            saveBlog();
          }}
        /> */}

        {isFetching && <CustomLoader />}

        {projects && (
          <div className={`flex flex-wrap mt-2`}>
            {projects.map((item) => (
              <BlogCardItem key={item.id} onClick={() => {}} item={item} />
            ))}
          </div>
        )}
        {/* create new button  */}
        <CreateProjectModal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default ProjectsManager;
