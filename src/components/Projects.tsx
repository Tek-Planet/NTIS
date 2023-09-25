import { useRef } from "react";
import { feedback, projects } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { ProjectCardItem, ServiceCardItem } from ".";

const Projects = () => {
  return (
    <div
      id="clients"
      className={`flex flex-col  ${styles.marginY} ${styles.marginX} `}
    >
      <div>
        <ProjectCardItem item={projects[0]} />
        <ProjectCardItem item={projects[1]} />
        <ProjectCardItem item={projects[2]} />
      </div>
    </div>
  );
};

export default Projects;
