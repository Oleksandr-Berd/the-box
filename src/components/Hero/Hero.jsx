import styles from "./Hero.module.css";

import back from "../../utilities/images/backCar.png";
import next from "../../utilities/images/nextCar.png";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroCon}>
        <div className={styles.heroTextCon}>
          <h3 className={styles.heroTitle}>Feature Projects</h3>
          <p className={styles.heroText}>
            The National University of Architecture
          </p>
        </div>
        <div className={styles.btnCon}>
          <button className={styles.heroBtn}>
            <img src={back} alt="" />
            <span style={{ marginLeft: "10px" }}> Back</span>
          </button>
          <button className={styles.heroBtn}>
            <span style={{ marginRight: "10px" }}>Next</span>
            <img src={next} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
