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
        {projects.map((item, index) => (
          <ProjectCardItem
            key={index.toString()}
            onClick={handleNavigate}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
