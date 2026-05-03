import styles from "../../styles/TreksHero.module.css";
import heroImage from "../../assets/treksHero1.jpg";

function TreksHero() {
  return (
    <section className={styles.hero}>

      {/* IMAGE */}
      <img 
        src={heroImage} 
        alt="Best treks in Uttarakhand mountains" 
        className={styles.heroImage} 
      />

      {/* CONTENT */}
      <div className={styles.heroContent}>
        <h1>
          Best <span className={styles.highlight}>Treks</span> in Uttarakhand
        </h1>

        <p>
          Discover the most scenic treks in Uttarakhand including Dayara Bugyal, 
          Dodital, Tungnath, and more with complete travel guides and details.
        </p>
      </div>

    </section>
  );
}

export default TreksHero;