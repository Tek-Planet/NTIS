import styles from "../style";

import { CustomLoader, ProjectCardItem } from ".";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../rtk/hooks";
import { useEffect } from "react";
import { fetchProjects } from "../rtk/features/project/projectSlice";

const Projects = () => {
  const { projects, isFetching } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/cooperation/${item.title}`, {
      state: { state: item },
    });
  };

  useEffect(() => {
    if (projects.length === 0) dispatch(fetchProjects());
  }, []);
  return (
    <div
      id="clients"
      className={`flex flex-col  ${styles.marginY} ${styles.marginX} `}
    >
      {isFetching ? (
        <CustomLoader />
      ) : (
        <div>
          {projects.map((item, index) => (
            <ProjectCardItem
              key={index.toString()}
              onClick={handleNavigate}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
