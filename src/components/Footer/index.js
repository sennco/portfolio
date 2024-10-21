import styles from "./footer.module.css";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <>
      <div className={styles.message}>
      <span className={styles.line}/>
        <p>Made with ❤️ by João Senco :)</p>
      </div>
    </>
  );
}

export default Footer;
