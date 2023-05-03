import styles from "./SideBarProjects.module.css";

const SideBarProjects = () => {
  const handleBtn = (evt) => {
    const divElements = document.querySelector(`button.${styles.active}`);
    if (divElements) {
      divElements.classList.remove(`${styles.active}`);
      divElements.classList.add(`${styles.asideNavBarBtn}`);
    }
    evt.target.classList.remove(`${styles.asideNavBarBtn}`);
    evt.target.classList.add(`${styles.active}`);
  };

  return (
    <aside className={styles.asideBar}>
      <h4 className={styles.asideBarTitle}>Projects</h4>
      <ul className={styles.asideBarList}>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn}>
            All
          </button>
        </li>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn}>
            Commercial
          </button>
        </li>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn}>
            Residential
          </button>
        </li>
        <li className={styles.asideBarItem}>
          <button className={styles.asideNavBarBtn} onClick={handleBtn}>
            Other
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default SideBarProjects;
