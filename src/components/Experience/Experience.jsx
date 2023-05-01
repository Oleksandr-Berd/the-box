import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <ul className={styles.experienceLits}>
        <li className={styles.experienceItem}>
          <h3 className={styles.experienceItemTitle}>123</h3>
          <p className={styles.experienceItemText}>Projects Completed</p>
        </li>
        <li className={styles.experienceItem}>
          <h3 className={styles.experienceItemTitle}>84</h3>
          <p className={styles.experienceItemText}>Happy Clients</p>
        </li>
        <li className={styles.experienceItem}>
          <h3 className={styles.experienceItemTitle}>30</h3>
          <p className={styles.experienceItemText}>Years in Business</p>
        </li>
        <li className={styles.experienceItem}>
          <h3 className={styles.experienceItemTitle}>37</h3>
          <p className={styles.experienceItemText}>Awards win</p>
        </li>
      </ul>
      <div className={styles.experienceCon}>
        <h3 className={styles.conTitle}>30 Years Experience</h3>
        <p className={styles.conText}>
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <button className={styles.btnExp}>Contact Us</button>
      </div>
    </section>
  );
};

export default Experience;
