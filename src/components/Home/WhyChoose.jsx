import styles from "../../styles/WhyChoose.module.css";
import { FaMapMarkedAlt, FaBolt, FaCar } from "react-icons/fa";

function WhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Why <span className={styles.highlight}>Choose Us</span>
        </h2>

        <p className={styles.subheading}>
         Trusted local experts in Uttarkashi for trekking, travel services, permits, and complete trip planning.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaMapMarkedAlt />
            </div>
            <h3>Local Expertise</h3>
            <p>
              We are based in Uttarkashi and understand the complete permit
              process, making it easier for travelers.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaBolt />
            </div>
            <h3>Fast Process</h3>
            <p>
              Get your permits quickly with our assistance without confusion or
              delays.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <FaCar />
            </div>
            <h3>Complete Travel Support</h3>
            <p>
              We help with permits, vehicle booking, and complete travel
              planning for a smooth experience.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChoose;