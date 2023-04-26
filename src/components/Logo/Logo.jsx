import { ReactComponent as LogoSvg } from "../../utilities/images/logo.svg";

import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logoCon}>
      <LogoSvg className={styles.logo} />
      <p className={styles.logoText}>TheBox</p>
    </div>
  );
};

export default Logo;
