import styles from "../../styles/NelongPermit.module.css";
import permitImg from "../../assets/NelongJadung.jpg";
import { useNavigate } from "react-router-dom";

function NelongPermit() {
  const navigate = useNavigate();
  return (
    <section className={styles.permitSection}>
      <div className={styles.permitContainer}>
        <div className={styles.permitImage}>
          <img src={permitImg} alt="Nelong Valley" />
        </div>

        <div className={styles.permitContent}>
          <h2>
            Get <span className={styles.highlight}>Nelong Valley Permit</span>{" "}
            in Uttarkashi
          </h2>

          <p>
            Nelong Valley is a restricted Himalayan region in Uttarkashi,
            Uttarakhand. Travelers must obtain a special permit from the
            District Magistrate office before visiting this high-altitude valley
            near the Indo-Tibet border.
          </p>

          <p>
            We provide complete assistance for Nelong Valley permit, including
            application process, required documents, vehicle booking, and local
            support. You can also explore nearby attractions like Gartang Gali
            and plan your visit based on the best time to visit Nelong Valley.
          </p>

          <button
            className={styles.permitBtn}
            onClick={() => navigate("/NelongValleyPermit")}
          >
           Get Nelong Valley Permit Details
          </button>
        </div>
      </div>
    </section>
  );
}

export default NelongPermit;
