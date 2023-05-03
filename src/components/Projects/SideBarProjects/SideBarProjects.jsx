import { useEffect, useState } from "react";
import styles from "./SideBarProjects.module.css";

const SideBarProjects = ({submit}) => {

  const [status, setStatus] = useState("all")

  const handleBtn = (evt) => {
    const divElements = document.querySelector(`button.${styles.active}`);
    if (divElements) {
      divElements.classList.remove(`${styles.active}`);
      divElements.classList.add(`${styles.asideNavBarBtn}`);
    }
    evt.target.classList.remove(`${styles.asideNavBarBtn}`);
    evt.target.classList.add(`${styles.active}`);
    setStatus(evt.target.getAttribute("data"));
  };

  useEffect(() => {
  submit(status)
},[status, submit])

  return (
    <aside className={styles.asideBar}>
      <h4 className={styles.asideBarTitle}>Projects</h4>
      <ul className={styles.asideBarList}>
        <li className={styles.asideBarItem}>
          <button className={styles.active} onClick={handleBtn} data="all">
            All
          </button>
        </li>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn} data="commercial">
            Commercial
          </button>
        </li>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn} data="residential">
            Residential
          </button>
        </li>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn} data="other">
            Other
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarProjects;
