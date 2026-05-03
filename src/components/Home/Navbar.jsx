import { useState, useEffect } from "react";
import styles from "../../styles/Navbar.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      
      <div className={styles.navContainer}>

        {/* LOGO */}
        <div className={styles.logo}>
          <img src={logo} alt="Uttarakhand Trekkers" />
        </div>

        {/* HAMBURGER */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className={styles.rightSection}>

          <ul className={styles.navLinks}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/NelongValleyPermit">Nelong Valley Permit</Link></li>
             <li><Link to="/treks">Treks</Link></li>
              <li><Link to="/services">Services</Link></li>
               <li><Link to="/about">About</Link></li>
            {/* <li><a href="/treks">Treks</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li> */}
          </ul>

          <ul className={styles.contactIcons}>
            <li><a href="tel:+918923259390"><FiPhone /></a></li>
            <li><a href="https://wa.me/918923259390" target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
            <li><a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
          </ul>

        </div>
      </div>

      {/* MOBILE MENU */}
      <ul className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/NelongValleyPermit" onClick={() => setMenuOpen(false)}>Nelong Valley Permit</Link></li>
        <li><Link to="/treks" onClick={() => setMenuOpen(false)}>Treks</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>


        {/* <li><a href="/treks" onClick={() => setMenuOpen(false)}>Treks</a></li>
        <li><a href="/services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="/contact" onClick={() => setMenuOpen(false)}>About</a></li> */}
      </ul>

    </nav>
  );
}

export default Navbar;