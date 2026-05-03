import styles from "../../styles/Hero.module.css";
import heroImage from "../../assets/heroImage.jpg"
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/918923259390", "_blank");
  };
  return (
    <section className={styles.hero}>

  <img 
    src={heroImage} 
    alt="Treks in Uttarakhand mountains" 
    className={styles.heroImage} 
  />

      <div className={styles.heroContent}>
        <h1>
          Explore <span className={styles.highlight}>Treks</span> in Uttarakhand
        </h1>
        <p>Complete guide on how to get Nelong Valley Permit, best time to visit, and travel assistance.</p>

        <div className={styles.btnGroup}>
          <button
            className={`${styles.heroBtn} ${styles.primaryBtn}`}
            onClick={() => navigate("/NelongValleyPermit")}
          >
            Apply for Nelong Valley Permit
          </button>

          <button className={`${styles.heroBtn} ${styles.secondaryBtn}`} onClick={handleWhatsApp}>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
