import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>

        <div className={styles.logo}>
          <img src={logo} alt="Uttarakhand Trekkers" />
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/NelongValleyPermit" onClick={() => setMenuOpen(false)}>Nelong Valley Permit</Link></li>
          <li><a href="/#treks" onClick={() => setMenuOpen(false)}>Treks</a></li>
          <li><a href="/#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>

          <li>
            <a
              href="https://wa.me/918923259390?text=Hello%20I%20want%20information%20about%20treks"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              +91 89232 59390
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;