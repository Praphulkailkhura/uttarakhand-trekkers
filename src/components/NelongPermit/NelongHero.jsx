import styles from "../../styles/NelongHero.module.css"
import nelonghero from "../../assets/video/nelonghero.mp4"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function NelongHero() {

    const handleWhatsApp = () => {
    window.open("https://wa.me/918923259390?text=Hi%20I%20want%20Nelong%20Valley%20permit", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+918923259390");
  };


  return (
    <section className={styles.hero}>

      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      >
        <source src={nelonghero} type="video/mp4" />
      </video>

      <div className={styles.heroContent}>
        <h1>Get Your <span className={styles.highlight}>Nelong Jadung Valley</span> Pass with Us</h1>

                     <div className={styles.btnGroup}>
          <button className={styles.heroBtn} onClick={handleWhatsApp}>
            <FaWhatsapp className={styles.icon} />
            WhatsApp
          </button>

          <button className={styles.heroBtn} onClick={handleCall}>
            <FaPhoneAlt className={styles.icon} />
            Call Now
          </button>
        </div>
      </div>

    </section>
  )
}

export default NelongHero