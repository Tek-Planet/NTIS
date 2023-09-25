import { useRef } from "react";
import { feedback } from "../constants";
import styles from "../style";

import Slider from "react-slick";
import { ProjectCardItem, ServiceCardItem } from ".";

const Projects = () => {
  return (
    <div id="clients" className={`flex flex-col  ${styles.marginY} `}>
      <div>
        <ProjectCardItem item={feedback[0]} />
        <ProjectCardItem item={feedback[1]} />
        <ProjectCardItem item={feedback[2]} />
      </div>
    </div>
  );
};

export default Projects;
