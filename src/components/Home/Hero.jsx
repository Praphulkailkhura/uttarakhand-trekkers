import styles from "../../styles/Hero.module.css";
import heroVideo from "../../assets/video/hero-video.mp4";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/918923259390", "_blank");
  };
  return (
    <section className={styles.hero}>
      <video autoPlay loop muted playsInline className={styles.heroVideo}>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={styles.heroContent}>
        <h1>
          Explore <span className={styles.highlight}>Treks</span> in Uttarakhand
        </h1>
        <p>Nelong Valley Permit • Treks • Travel</p>

        <div className={styles.btnGroup}>
          <button
            className={styles.heroBtn}
            onClick={() => navigate("/NelongValleyPermit")}
          >
            Get Nelong Valley Permit
          </button>

          <button className={styles.heroBtn} onClick={handleWhatsApp}>
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
