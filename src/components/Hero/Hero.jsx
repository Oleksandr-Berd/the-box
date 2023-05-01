import styles from "./Hero.module.css";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
            <AiOutlineArrowLeft />
            Back
          </button>
          <button className={styles.heroBtn}>
            Next
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
