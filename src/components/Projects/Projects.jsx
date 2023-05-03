import Gallery from "./Carousel/Carousel";
import styles from "./Projects.module.css"
import SideBarProjects from "./SideBarProjects/SideBarProjects";

const Projects = () => {
    return (<section className={styles.projectsSec}>
        <SideBarProjects />
        <Gallery/>
    </section> );
}
 
export default Projects;