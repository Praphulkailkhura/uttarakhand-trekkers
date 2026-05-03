import styles from "../../styles/NelongHero.module.css";
import HeroNelong from "../../assets/HeroNelong.jpg";
import { useNavigate } from "react-router-dom";

function NelongHero() {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/918923259390?text=Hi%20I%20need%20help%20with%20Nelong%20Valley%20permit", "_blank");
  };

    const handleCall = () => {
    window.open("tel:+918923259390");
  };


  return (
    <section className={styles.nelongHero}>

      <img 
        src={HeroNelong} 
        alt="Nelong Valley Uttarakhand near Indo China border" 
        className={styles.nelongHeroImage} 
      />

      <div className={styles.nelongHeroContent}>
        <h1>
          Get <span className={styles.nelongHighlight}>Nelong Valley </span>Permit in Uttarakhand
        </h1>

        <p>
          Complete guide to Nelong Valley permit, process, documents, and travel assistance.
        </p>

        <div className={styles.nelongBtnGroup}>
         <button 
            className={`${styles.nelongBtn} ${styles.primaryBtn}`} 
            onClick={handleWhatsApp}
          >
            Get Help on WhatsApp
          </button>

          {/* ✅ Secondary Action */}
          <button 
            className={`${styles.nelongBtn} ${styles.secondaryBtn}`} 
            onClick={handleCall}
          >
            Call for Assistance
          </button>
        </div>
      </div>

    </section>
  );
}

export default NelongHero;