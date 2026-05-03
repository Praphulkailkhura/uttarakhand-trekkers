import styles from "../../styles/Massage.module.css";
import massage from "../../assets/massage/massage.jpg";

function Massage() {
  return (
    <section
      className={styles.massageSection}
      id="massage"
      aria-labelledby="massage-heading"
    >
      <div className={styles.massageContainer}>

        {/* IMAGE */}
        <div className={styles.massageImage}>
          <img
            src={massage}
            alt="Professional massage therapy service in Uttarkashi for trekkers and travelers"
            loading="lazy"
          />
        </div>

        {/* CONTENT */}
        <div className={styles.massageContent}>

          {/* H2 (SEO IMPORTANT) */}
          <h2 id="massage-heading" className={styles.title}>
            Massage Service in <span className={styles.highlight}>Uttarkashi</span>
          </h2>

          {/* MAIN KEYWORD PARAGRAPH */}
          <p className={styles.description}>
            Looking for massage services in Uttarkashi after trekking or long travel? 
            Our professional massage therapy in Uttarkashi helps reduce muscle pain, 
            improve blood circulation, and provide deep relaxation for trekkers and travelers.
          </p>

          {/* SECONDARY KEYWORDS */}
          <p className={styles.description}>
            We offer relaxing body massage in Uttarkashi designed for recovery after Himalayan treks, 
            helping you feel refreshed, stress-free, and energized.
          </p>

          {/* BENEFITS (UL SEO FRIENDLY) */}
          <ul className={styles.benefits}>
            <li>Reduce muscle tension and post-trek soreness</li>
            <li>Improve blood circulation and body recovery</li>
            <li>Relieve stress and mental fatigue</li>
            <li>Increase flexibility and joint movement</li>
            <li>Promote better sleep and relaxation</li>
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/918923259390?text=I%20want%20to%20book%20massage%20service%20in%20Uttarkashi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookBtn}
          >
            Book Massage in Uttarkashi
          </a>

        </div>

      </div>
    </section>
  );
}

export default Massage;