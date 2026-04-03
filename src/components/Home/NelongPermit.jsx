import styles from "../../styles/NelongPermit.module.css"
import permitImg from "../../assets/NelongJadung.jpg"
import { useNavigate } from "react-router-dom";

function NelongPermit(){
  const navigate = useNavigate();
  return(
    <section className={styles.permitSection}>

      <div className={styles.permitContainer}>

        <div className={styles.permitImage}>
          <img src={permitImg} alt="Nelong Valley"/>
        </div>

        <div className={styles.permitContent}>
          <h2> <span className={styles.highlight}>Nelong Valley </span>Permit</h2>

          <p>
            Nelong Valley is one of the most beautiful high altitude valleys
            in Uttarkashi, Uttarakhand. Travelers need a special permit to visit
            this restricted Himalayan region.
          </p>

          <p>
            We help travelers get Nelong Valley permits easily along with
            vehicle arrangements and local guidance.
          </p>

          <button className={styles.permitBtn} onClick={()=> navigate("/NelongValleyPermit")}>
            Read Full Guide
          </button>

        </div>

      </div>

    </section>
  )
}

export default NelongPermit