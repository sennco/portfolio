// import { Link } from 'react-router-dom'
import styles from "./index.module.css";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

function Home() {
  return (
    <>
      <Banner />
      <div className={styles.topo_bg} id="about">
        <div className={styles.card}>
          <Projects />
        </div>
      </div>
      <div className={styles.linha} id="contact"></div>
      <Contact/>
      <Footer />
    </>
  );
}

export default Home;
