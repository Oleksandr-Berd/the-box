import navLinks from "../../utilities/navLinks.json";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        {navLinks.map(({ href, name }) => (
          <li key={name} className={styles.navItem}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
