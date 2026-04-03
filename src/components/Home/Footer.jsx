import styles from "../../styles/Footer.module.css"
import logo from "../../assets/Logo.png"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (

    <footer className={styles.footer}>

      <div className={styles.footerContainer}>

        <div className={styles.footerGrid}>

          <div className={styles.about}>
            <h3>Uttarakhand Trekkers</h3>
            <p>
              Explore the beautiful Himalayas with us. 
              We offer treks, tours, food & stay and travel services in Uttarkashi.
            </p>

            <div className={styles.logo}>
              <img src={logo} alt="Uttarakhand Trekkers" />
            </div>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Treks</li>
              <li>Services</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact</h4>

            <p>
              <FaMapMarkerAlt /> Uttarkashi, Uttarakhand
            </p>

            <p>
              <FaPhoneAlt /> 
              <a href="tel:+918923259390" className={styles.link}> +91 89232 59390</a>
            </p>

            <p>
              <FaEnvelope /> 
              <a href="mailto:uttarakhandtrekkers@gmail.com" className={styles.link}>
                uttarakhandtrekkers@gmail.com
              </a>
            </p>

          </div>

        </div>

        <div className={styles.copy}>
          © 2026 Uttarakhand Trekkers. All Rights Reserved.
        </div>

      </div>

    </footer>

  )
}

export default Footer