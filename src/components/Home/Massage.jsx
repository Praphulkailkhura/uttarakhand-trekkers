import styles from "../../styles/Massage.module.css"
import massage from "../../assets/massage/massage.jpg"

function Massage(){
  return(

    <section className={styles.massageSection}>

      <div className={styles.massageContainer}>

        <div className={styles.massageImage}>
          <img src={massage} alt="Massage in Uttarkashi"/>
        </div>

        <div className={styles.massageContent}>

          <h2 className={styles.title}>
            Massage in <span className={styles.highlight}>Uttarkashi</span>
          </h2>

          <p className={styles.description}>
            Feeling tired after a long journey or trek? Treat your body with a relaxing massage in Uttarkashi. 
            Our professional massage therapy helps reduce muscle stiffness, improve blood circulation, 
            and make you feel fresh and relaxed again.
          </p>

          <ul className={styles.benefits}>
            <li>Reduce muscle tension and soreness</li>
            <li>Boost blood circulation for faster recovery</li>
            <li>Relieve stress and improve mental clarity</li>
            <li>Improve flexibility and joint mobility</li>
            <li>Enhance sleep quality for better rest</li>
          </ul>

          <a
            href="https://wa.me/918923259390?text=I%20want%20to%20book%20massage%20in%20Uttarkashi"
            target="_blank"
            className={styles.bookBtn}
          >
            Book Massage
          </a>

        </div>

      </div>

    </section>

  )
}

export default Massage