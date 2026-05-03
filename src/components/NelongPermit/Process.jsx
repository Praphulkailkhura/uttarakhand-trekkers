import styles from "../../styles/Process.module.css";

function Process(){
  return(

    <section className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.title}>
          Process to Get <span className={styles.highlight}>Nelong Valley Permit</span>
        </h2>

        <div className={styles.steps}>

          <div className={styles.step}>Step 1: Write an Application to the DM of Uttarkashi</div>

          <div className={styles.step}>Step 2: Visit District Collectorate</div>

          <div className={styles.step}>Step 3: Police Verification at District Thana</div>

          <div className={styles.step}>Step 4: Visit District Collectorate Again</div>

        </div>

      </div>

    </section>

  )
}

export default Process;