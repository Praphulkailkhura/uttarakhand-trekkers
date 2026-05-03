import styles from "../../styles/Contact.module.css"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>

        <h2 className={styles.title}>
          Get in <span className={styles.highlight}>Touch</span>
        </h2>

        {/* SEO SUBTEXT */}
        <p className={styles.subText}>
          Contact Uttarakhand Trekkers for trekking tours, Nelong Valley permits, 
          travel assistance, and local services in Uttarkashi. Call, WhatsApp, or 
          follow us on Instagram for quick support.
        </p>

        <div className={styles.contactGrid}>

          <div className={styles.contactInfo}>

            <p>
              <FaMapMarkerAlt /> <strong> Address:</strong> Uttarkashi, Uttarakhand
            </p>

            <p>
              <FaPhoneAlt /> <strong> Phone:</strong>{" "}
              <a href="tel:+918923259390" className={styles.link}>
                +91 89232 59390
              </a>
            </p>

            <p>
              <FaEnvelope /> <strong> Email:</strong>{" "}
              <a
                href="mailto:uttarakhandtrekkers@gmail.com"
                className={styles.link}
              >
                uttarakhandtourism01@gmail.com
              </a>
            </p>

            {/* BUTTONS */}
            <div className={styles.btnGroup}>

              <a
                href="https://wa.me/918923259390"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactBtn}
                aria-label="Chat on WhatsApp with Uttarakhand Trekkers"
              >
                Chat on WhatsApp
              </a>

              <a
                href="https://www.instagram.com/uttrakhand_trekkers01"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryBtn}
                aria-label="Visit Uttarakhand Trekkers Instagram profile"
              >
                Instagram
              </a>

            </div>

          </div>

          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps?q=uttarkashi&output=embed"
              loading="lazy"
              title="Uttarkashi location map"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact