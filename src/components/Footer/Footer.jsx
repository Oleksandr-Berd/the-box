import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";

import fb from "../../utilities/images/akar-icons_facebook-fill.png";
import link from "../../utilities/images/link.png";
import twitter from "../../utilities/images/twitter.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainInfoCon}>
        <ul className={styles.contactsCon}>
          <li className={styles.addressItem}>
            <span className={styles.addressText}>address:</span> 6391 Elgin St.
            Celina, Delaware 10299
          </li>
          <li className={styles.addressItem}>
            <span className={styles.addressText}>phone:</span> +84 1102 2703
          </li>
          <li className={styles.addressItem}>
            <span className={styles.addressText}>email:</span> hello@thebox.com
          </li>
          <Logo />
        </ul>
        <div className={styles.formCon}>
          <h4 className={styles.formTitle}>Newsletter:</h4>
          <form className={styles.form}>
            <div className={styles.inputCon}>
              <label htmlFor="input" className={styles.label}>
                Your email here
              </label>
              <input
                type="text"
                className={styles.input}
                id="input"
                tabindex="0"
              />
            </div>
            <button type="submit" className={styles.formBtn}>
              Subscribe
            </button>
          </form>
          <div className={styles.socCon}>
            <h4 className={styles.socTitle}>social:</h4>
            <ul className={styles.socList}>
              <li className={styles.socItem}>
                <a href="https://www.facebook.com/sasha.berdichevsky">
                  <img src={fb} alt="" className={styles.socIcon} />
                </a>
              </li>
              <li className={styles.socItem}>
                <a href="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/">
                  <img src={link} alt="" className={styles.socIcon} />
                </a>
              </li>
              <li className={styles.socItem}>
                <a href="https://twitter.com/O7bvkxqt2f8">
                  <img src={twitter} alt="" className={styles.socIcon} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.bottomText}>
        TheBox Company © 2022. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
