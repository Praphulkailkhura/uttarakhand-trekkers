import styles from "../../styles/Process.module.css"

function Process(){
  return(

    <section className={styles.section}>

      <div className={styles.container}>

        <h2 className={styles.title}>
          Process to Get <span className={styles.highlight}>Nelong Valley Permit</span>
        </h2>

        <ul className={styles.list}>

          <li>Step 1: Write an Application to the DM of Uttarkashi</li>

          <li>Step 2: Visit District Collectorate</li>

          <li>
            Step 3: Take your application and signed letter to District Thana
          </li>

          <li>Step 4: Visit the District Collectorate Again</li>

          <li>Important Points to Keep in Mind</li>

          <li>Enquire For Nelong Valley Permit</li>

        </ul>

        {/* <a
          href="https://wa.me/918923259390?text=I%20want%20Nelong%20Valley%20permit"
          target="_blank"
          className={styles.btn}
        >
          Get Permit Now
        </a> */}

      </div>

    </section>

  )
}

export default Process