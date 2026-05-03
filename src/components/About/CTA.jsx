import styles from "../../styles/CTA.module.css";

function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Plan Your <span className={styles.highlight}>Uttarakhand Trip</span> with a Local Expert
        </h2>

        <p className={styles.subtext}>
          Get complete support for treks, travel, permits, and stays in Uttarkashi.
        </p>

        <div className={styles.buttons}>
          <a href="tel:+918923259390" className={styles.callBtn}>
            Call Now
          </a>

          <a
            href="https://wa.me/918923259390"
            target="_blank"
            rel="noreferrer"
            className={styles.whatsappBtn}
          >
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default CTA;