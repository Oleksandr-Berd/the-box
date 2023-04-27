import styles from "./About.module.css"

const About = () => {
    return (
      <section className={styles.aboutSect}>
        <div className={styles.aboutCon}>
          <h3 className={styles.aboutTitle}>About us</h3>
          <p className={styles.aboutText}>
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way.
          </p>
          <p className={styles.aboutText}>
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