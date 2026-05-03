import styles from "../../styles/Certifications.module.css";
import certImage from "../../assets/about/Certifications.png";

function Certifications() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        <div className={styles.left}>
          <img src={certImage} alt="NIM certificate and BMC badge" />
        </div>

        <div className={styles.right}>

          <h2>
            Certifications <span className={styles.highlight}>& Achievements</span>
          </h2>

          <h4 className={styles.role}>
            Verified Training & Professional Recognition
          </h4>

          <div className={styles.divider}></div>

          <p className={styles.desc}>
            Certified from the prestigious Nehru Institute of Mountaineering (NIM), Uttarkashi, one of Asia’s leading mountaineering institutes. 
            This certification reflects strong technical skills, discipline, and real Himalayan trekking experience.
          </p>

          <ul className={styles.points}>
            <li>Basic Mountaineering Course (BMC) – NIM</li>
            <li>Grade A Performance</li>
            <li>Professional Trek Leader Certification</li>
          </ul>

          <div className={styles.highlights}>
            <span>NIM Certified</span>
            <span>BMC Qualified</span>
            <span>Grade A</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Certifications;