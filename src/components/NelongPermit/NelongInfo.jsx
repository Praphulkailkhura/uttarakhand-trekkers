import styles from "../../styles/NelongInfo.module.css";
import permitImg from "../../assets/Nelong3.jpg";

function NelongInfo() {
  return (
    <section className={styles.permitSection}>

      <div className={styles.permitContainer}>

        <div className={styles.permitRow}>

          {/* LEFT CONTENT */}
          <div className={styles.permitContent}>

            {/* ✅ Heading moved inside */}
            <h2 className={styles.heading}>
              How to Get <span className={styles.highlight}>Nelong Valley Permit</span>
            </h2>

            <p>
              Nelong Valley is a high-altitude destination located in the Uttarkashi district of Uttarakhand, near the Indo-China border. It lies inside Gangotri National Park at around 11,000 feet above sea level.
            </p>

            <p>
              Unlike the green valleys of Uttarakhand, Nelong Valley has a cold desert landscape with rocky mountains, barren land, and wide open views similar to Ladakh.
            </p>

            <p>
              Due to its sensitive border location, entry to Nelong Valley is restricted. Visitors must obtain a Nelong Valley permit issued by the forest department and local authorities before visiting.
            </p>

            <p>
              You can apply for the permit through offline process or take assistance from local travel experts for a smoother experience.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.permitImage}>
            <div className={styles.permitImageCard}>
              <img 
                src={permitImg} 
                alt="Nelong Valley landscape in Uttarakhand near Gangotri" 
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default NelongInfo;