import { projects } from "../constants";
import styles from "../style";

import { ProjectCardItem } from ".";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  let navigate = useNavigate();

  const handleNavigate = (item: any) => {
    navigate(`/cooperation/${item.title}`, {
      state: { state: item },
    });
  };
  return (
    <div
      id="clients"
      className={`flex flex-col  ${styles.marginY} ${styles.marginX} `}
    >
      <div>
        <ProjectCardItem onClick={handleNavigate} item={projects[0]} />
        <ProjectCardItem onClick={handleNavigate} item={projects[1]} />
        <ProjectCardItem onClick={handleNavigate} item={projects[2]} />
      </div>
    </div>
  );
};

export default Projects;
