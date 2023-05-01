import styles from "./About.module.css"

import aboutImg from "../../utilities/images/unsplash_6anudmpILw4.jpg"

const About = () => {
    return (
      <section className={styles.aboutSect}>
        <img
          src={aboutImg}
          alt=""
          width="902px"
          height="669px"
          className={styles.aboutImg}
        />
        <div className={styles.aboutCon}>
          <h3 className={styles.aboutTitle}>About us</h3>
          <p className={styles.aboutText}>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p className={styles.secondPar}>
            We’ve matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <button className={styles.aboutBtn}>More on Our History</button>
        </div>
      </section>
    );
}
 
export default About;