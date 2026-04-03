import styles from "../../styles/Facilitator.module.css";

function Facilitator() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Your <span>Facilitator</span>
        </h2>

        <div className={styles.card}>
          <h3>Ankit Chauhan</h3>

          <p>
            <b>Organization:</b> Uttarakhand Trekkers
          </p>

          <p>
            <b>Address:</b> Village Didsari, Post Office Maneri, Uttarkashi,
            Uttarakhand
          </p>

          <p>
            <b>Phone:</b> <a href="tel:+918923259390">+91 89232 59390</a>
          </p>

          <p>
            <b>Email:</b>{" "}
            <a href="mailto:uttarakhandtourism01@gmail.com">
              uttarakhandtourism01@gmail.com
            </a>
          </p>

          <a
            href="https://wa.me/918923259390"
            target="_blank"
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
