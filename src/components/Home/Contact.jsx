import styles from "../../styles/Contact.module.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>

        <h2 className={styles.title}>
          Get in <span className={styles.highlight}>Touch</span>
        </h2>

        <div className={styles.contactGrid}>

          <div className={styles.contactInfo}>

            <p>
              <FaMapMarkerAlt /> <strong> Address:</strong> Uttarkashi, Uttarakhand
            </p>

            <p>
              <FaPhoneAlt /> <strong> Phone:</strong>{" "}
              <a href="tel:+918923259390" className={styles.link}>+91 89232 59390</a>
            </p>

            <p>
              <FaEnvelope /> <strong> Email:</strong>{" "}
              <a href="mailto:uttarakhandtrekkers@gmail.com" className={styles.link}>
                uttarakhandtrekkers@gmail.com
              </a>
            </p>

            <a
              href="https://wa.me/918923259390"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactBtn}
            >
              Chat on WhatsApp
            </a>

          </div>

          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps?q=uttarkashi&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact