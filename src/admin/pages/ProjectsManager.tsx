import {
  BlogCardItem,
  ConfirmationModal,
  CreateProjectModal,
} from "../../components/admin";

import styles from "../../style";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";
import { CustomLoader } from "../../components";
import { plus } from "../../assets";
import {
  deleteProject,
  fetchProjects,
} from "../../rtk/features/project/projectSlice";

import { NewModel } from "../../types";
import { useAlert } from "react-alert";

const ProjectsManager = () => {
  let navigate = useNavigate();
  const { projects, isFetching } = useAppSelector((state) => state.project);
  const [isOpen, setIsOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<any>(null);
  const alert = useAlert();

  const dispatch = useAppDispatch();

  const handleNavigate = (item: NewModel) => {
    navigate(`/app/projects/${item.title}`, {
      state: { state: item, type: "project" },
    });
  };

  const handleDelete = async (item: NewModel) => {
    try {
      setConfirmModal(false);
      await dispatch(deleteProject(item));
      alert.show("item Deleted!", { type: "success" });
    } catch (error) {
      alert.show("Unable to delete item!", { type: "error" });
    }
  };

  function closeModal() {
    setIsOpen(false);
    setConfirmModal(false);
  }

  useEffect(() => {
    if (projects.length === 0) {
      dispatch(fetchProjects());
    }
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

        {isFetching && <CustomLoader />}

        {projects && (
          <div className={`flex flex-wrap mt-2`}>
            {projects.map((item) => (
              <BlogCardItem
                key={item.id}
                onClick={handleNavigate}
                item={item}
                onDelete={() => {
                  setConfirmModal(true);
                  setItemToDelete(item);
                }}
              />
            ))}
          </div>
        )}
        {/* create new button  */}
        {isOpen && (
          <CreateProjectModal isOpen={isOpen} closeModal={closeModal} />
        )}
        {confirmModal && (
          <ConfirmationModal
            isOpen={confirmModal}
            closeModal={closeModal}
            onContinue={() => handleDelete(itemToDelete)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsManager;
