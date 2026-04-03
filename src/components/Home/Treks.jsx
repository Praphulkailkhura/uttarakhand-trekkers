import styles from "../../styles/Treks.module.css";
import dayara from "../../assets/treks/dayara.jpg";
import jorai from "../../assets/treks/jorai.jpg";
import dodital from "../../assets/treks/dodital.jpg";
import gomukh from "../../assets/treks/gomukh.jpg";
import tungnath from "../../assets/treks/tungnath.jpg"
function Treks() {
  return (
    <section className={styles.treksSection} id="treks">
      <div className={styles.treksContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}>Treks</span> With Us
        </h2>

        <div className={styles.treksGrid}>
          <div className={styles.trekCard}>
            <img src={dayara} alt="Dayara Bugyal" />
            <div className={styles.trekContent}>
              <h3>Dayara Bugyal</h3>
              <p>One of the most beautiful alpine meadows in Uttarakhand.</p>
            </div>
          </div>

          <div className={styles.trekCard}>
            <img src={jorai} alt="Jorai Bugyal" />
            <div className={styles.trekContent}>
              <h3>Jorai Bugyal</h3>
              <p>A hidden Himalayan meadow surrounded by scenic peaks.</p>
            </div>
          </div>

          <div className={styles.trekCard}>
            <img src={dodital} alt="Dodital Trek" />
            <div className={styles.trekContent}>
              <h3>Dodital Trek</h3>
              <p>A peaceful trek leading to the beautiful Dodital lake.</p>
            </div>
          </div>

          <div className={styles.trekCard}>
            <img src={gomukh} alt="Gomukh Tapovan Trek" />
            <div className={styles.trekContent}>
              <h3>Gomukh Tapovan Trek</h3>
              <p>
                One of the most famous Himalayan treks leading to the source of
                the Ganga at Gomukh and the stunning Tapovan meadows.
              </p>
            </div>
          </div>

          <div className={styles.trekCard}>
            <img src={tungnath} alt="tungnath Trek" className={styles.tungnathImg}/>
            <div className={styles.trekContent}>
              <h3>Tungnath Trek</h3>
              <p>
                A scenic Himalayan trek leading to Tungnath, the highest Shiva
                temple in the world, offering breathtaking views of the
                Chaukhamba peaks and a serene spiritual experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Treks;
