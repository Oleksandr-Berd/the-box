import styles from "./Reputation.module.css";
import icon from "../../utilities/images/icon1.png";
import iconTwo from "../../utilities/images/icon2.png"
const Reputation = () => {
  return (
    <section className={styles.reputationSect}>
      <h2 className={styles.reputationTitle}>Our Reputation</h2>
      <ul className={styles.reputationList}>
        <li key={"Best Services"} className={styles.reputationItem}>
          <img src={icon} alt={"Best Services"} />
          <h3 className={styles.reputationItemTitle}>{"Best Services"}</h3>
          <p className={styles.reputationItemText}>
            {"Nullam senectus porttitor in eget. Eget rutrum leo interdum."}
          </p>
        </li>
        <li key={"Best Teams"} className={styles.reputationItem}>
          <img src={icon} alt={"Best Teams"} />
          <h3 className={styles.reputationItemTitle}>{"Best Teams"}</h3>
          <p className={styles.reputationItemText}>
            {"Cursus semper tellus volutpat aliquet lacus."}
          </p>
        </li>
        <li key={"Best Designs"} className={styles.reputationItem}>
          <img src={iconTwo} alt={"Best Designs"} />
          <h3 className={styles.reputationItemTitle}>{"Best Designs"}</h3>
          <p className={styles.reputationItemText}>
            {"Ultricies at ipsum nunc, tristique nam lectus."}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Reputation;
