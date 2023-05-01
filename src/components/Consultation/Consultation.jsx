import styles from "./Consultation.module.css"

const Consultation = () => {
    return (
      <section className={styles.consSection}>
        <div className={styles.textCon}>
          <h3 className={styles.constTitle}>
            Free consultation with exceptional quality
          </h3>
          <div className={styles.contactCon}>
            <p className={styles.consText}>Just one call:</p>
            <a href="+8411022703" className={styles.constLink}>
              +84 1102 2703
            </a>
          </div>
        </div>
        <button className={styles.consBtn}>Get your consultation</button>
      </section>
    );
}
 
export default Consultation;