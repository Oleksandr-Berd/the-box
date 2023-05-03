import { useState } from "react";
import Carousel from "./Carousel/Carousel";
import styles from "./Projects.module.css"
import SideBarProjects from "./SideBarProjects/SideBarProjects";

const Projects = () => {

    const [listCriteria, setListCriteria] = useState("all")

    const handleSubmitCriteria = (status) => {
        setListCriteria(status);
    }


    return (
      <section className={styles.projectsSec}>
        <SideBarProjects submit={handleSubmitCriteria} />
        <Carousel criteria={listCriteria} />
      </section>
    );
}
 
export default Projects;