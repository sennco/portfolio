import git from "../../assets/Github.svg";
import linkedin from "../../assets/Linkedin.svg";
import insta from "../../assets/Instagram.svg";

import styles from './nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a href="https://github.com/sennco">
        <img className={styles.icon} src={git} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/joaohenrique7369151ab/">
        <img className={styles.icon} src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/jhsenco/">
        <img className={styles.icon} src={insta} alt="Instagram" />
      </a>
    </nav>
  );
};

export default Nav;
