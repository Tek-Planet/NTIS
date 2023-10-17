import styles from "../style";

import { Graph } from ".";

const Research = () => {
  return (
    <div id="clients" className={`flex flex-col h-screen ${styles.marginY} `}>
      <div className="flex flex-col items-center sm:mb-10 mb-6 ">
        <p className={` ${styles.heading2} text-center text-linkactive `}>
          Research Data
        </p>
      </div>

      <Graph />
    </div>
  );
};

export default Research;
