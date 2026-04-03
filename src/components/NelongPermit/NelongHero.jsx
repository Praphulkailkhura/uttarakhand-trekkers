import styles from "../../styles/NelongHero.module.css"
import nelonghero from "../../assets/video/nelonghero.mp4"

function NelongHero() {
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
      </div>

    </section>
  )
}

export default NelongHero