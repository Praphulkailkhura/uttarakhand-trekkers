import styles from "../../styles/Facilitator.module.css";

function Facilitator() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <h2 className={styles.heading}>
          Meet Your <span>Permit Facilitator</span>
        </h2>

        <div className={styles.card}>

          <h3 className={styles.name}>Ankit Chauhan</h3>

          <p className={styles.role}>
            Trusted Local Expert from Uttarakhand Trekkers
          </p>

          <div className={styles.infoGrid}>

            <p><b>Organization:</b> Uttarakhand Trekkers</p>

            <p><b>Location:</b> Uttarkashi, Uttarakhand</p>

            <p>
              <b>Phone:</b>{" "}
              <a href="tel:+918923259390">+91 89232 59390</a>
            </p>

            <p>
              <b>Email:</b>{" "}
              <a href="mailto:uttarakhandtourism01@gmail.com">
                uttarakhandtourism01@gmail.com
              </a>
            </p>

          </div>

          <div className={styles.trust}>
            ✔ Local Expert &nbsp; ✔ Fast Response &nbsp; ✔ Permit Assistance
          </div>

          <a
            href="https://wa.me/918923259390"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Contact on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Facilitator;