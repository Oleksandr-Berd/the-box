import navLinks from "../../utilities/data/navLinks.json";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        {navLinks.map(({ href, name }) => (
          <li key={name} className={styles.navItem}>
            <a href={href} className={styles.navItemLink}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
