import styles from "../../styles/AboutHero.module.css";
import heroImage from "../../assets/about/aboutHero.jpg";

function AboutHero() {
  return (
    <section className={styles.hero}>

      {/* IMAGE */}
      <img 
        src={heroImage} 
        alt="Trekking guide in Uttarkashi with Himalayan experience" 
        className={styles.heroImage} 
      />

      {/* CONTENT */}
      <div className={styles.heroContent}>
        <h1>
          About <span className={styles.highlight}>Uttarakhand Trekkers</span>
        </h1>

        <p>
          Led by a certified trekking expert from Uttarkashi, we provide trusted 
          trekking and travel services with real Himalayan experience.
        </p>
      </div>

    </section>
  );
}

export default AboutHero;