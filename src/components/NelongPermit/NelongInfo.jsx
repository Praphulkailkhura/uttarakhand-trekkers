import styles from "../../styles/NelongInfo.module.css";
import permitImg from "../../assets/Nelong3.jpg";

function NelongInfo() {
  return (
    <section className={styles.permitSection}>

      <div className={styles.permitContainer}>

        {/* 🔥 Heading top full width */}
        <h2 className={styles.heading}>
          How to get <span className={styles.highlight}>Nelong Jadung Valley</span> Pass
        </h2>

        {/* 🔥 Content Row */}
        <div className={styles.permitRow}>

          {/* Left Content */}
          <div className={styles.permitContent}>
            <p>
              Nelong Valley is a stunning high-altitude destination located in the
              Uttarkashi district of Uttarakhand, near the Indo-Tibet border.
              Situated at an altitude of around 11,000 feet above sea level, it
              lies within the Gangotri National Park and is known for its
              untouched natural beauty and unique landscape.
            </p>

            <p>
              Unlike the typical green valleys of Uttarakhand, Nelong Valley
              features a cold desert terrain with rocky mountains, deep gorges,
              and wide open views similar to Ladakh.
            </p>

            <p>
              Due to its strategic location near the international border, Nelong
              Valley remained restricted for many years and was only recently
              opened to tourists. Visitors are required to obtain a special permit
              issued by the forest department to enter the valley.
            </p>
          </div>

          {/* Right Image */}
          <div className={styles.permitImage}>
            <img src={permitImg} alt="Nelong Valley" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default NelongInfo;