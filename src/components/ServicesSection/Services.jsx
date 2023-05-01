import styles from "./Services.module.css"

import iconCon from "../../utilities/images/iconSer1.png"
import iconRen from "../../utilities/images/iconSer2.png";
import iconCons from "../../utilities/images/iconSer3.png";
import iconRep from "../../utilities/images/iconSer4.png";
import iconArch from "../../utilities/images/iconSer5.png";
import iconEl from "../../utilities/images/iconSer6.png";


const Services = () => {
    return (
      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Services</h2>
        <ul className={styles.servicesList}>
          <li className={styles.servicesItem}>
            <img src={iconCon} alt="" />
            <p className={styles.servicesItemText}>Construction</p>
          </li>
          <li className={styles.servicesItem}>
            <img src={iconRen} alt="" />
            <p className={styles.servicesItemText}>Renovation</p>
          </li>
          <li className={styles.servicesItem}>
            <img src={iconCons} alt="" />
            <p className={styles.servicesItemText}>Consultation</p>
          </li>
          <li className={styles.servicesItem}>
            <img src={iconRep} alt="" />
            <p className={styles.servicesItemText}>Repair Services</p>
          </li>
          <li className={styles.servicesItem}>
            <img src={iconArch} alt="" />
            <p className={styles.servicesItemText}>Architecture</p>
          </li>
          <li className={styles.servicesItem}>
            <img src={iconEl} alt="" />
            <p className={styles.servicesItemText}>Electric</p>
          </li>
        </ul>
      </section>
    );
}
 
export default Services;