import styles from "../../styles/Guide.module.css";
import guideImage from "../../assets/about/Guide.jpeg";

function Guide() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        
        <div className={styles.left}>
          <img src={guideImage} alt="Ankit Chauhan Trek Guide Uttarkashi" />
        </div>

        
        <div className={styles.right}>

          <h2>
            Meet <span className={styles.highlight}>Ankit Chauhan</span>
          </h2>

          <h4 className={styles.role}>
            Certified Trek Leader & Mountaineer
          </h4>

          <div className={styles.divider}></div>

           <p className={styles.desc}>
            Based in Uttarkashi, Ankit Chauhan is a certified trekking expert with real Himalayan experience. 
            He has completed his Basic Mountaineering Course (BMC) from the prestigious Nehru Institute of Mountaineering (NIM), 
            one of Asia’s leading institutes. With extensive trekking and guiding experience, he ensures safe, well-organized, 
            and memorable adventures for every traveler.
          </p>

          {/* HIGHLIGHTS */}
          <ul className={styles.points}>
            <li>50+ Treks Completed in Uttarakhand Himalayas</li>
            <li>2+ Years Trek Guide Experience in Uttarkashi</li>
            <li>Worked with Multiple Adventure Companies (Freelancer)</li>
            <li>24×7 Trek Support & Assistance</li>
            <li>Ex-Instructor at Tata Steel Adventure Foundation (TSAF)</li>
          </ul>

          {/* HIGHLIGHTS */}
          <div className={styles.highlights}>
            <span>50+ Treks</span>
            <span>NIM Certified</span>
            <span>Ex-TSAF Instructor</span>
            <span>Freelancer</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Guide;