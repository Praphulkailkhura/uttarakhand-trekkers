import styles from "../../styles/Step.module.css";
// import carImg from "../assets/car.png";
import massage from "../../assets/massage/massage.jpg"
import permit from "../../assets/Permit.jpeg"

function Step() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* <h2 className={styles.heading}>
          Process to Get <span>Nelong Valley Permit</span>
        </h2> */}

        {/* STEP 1 (with image) */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 1: Write an Application to the DM of Uttarkashi</h3>
            <p>
              In your application mention your interest in visiting Nelong Valley.
              Mention details of every participant, driver details, and car details.
              Attach photocopies of all IDs. Keep 2 Photocopies of this set of application with you.
            </p>
          </div>
           {/* <div className={styles.image}>
            <img src={massage} alt="Vehicle Rental" />
          </div> */}
        </div>

        {/* STEP 2 (no image) */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 2: Visit District Collectorate</h3>
            <p>
             After you have written your application, visit the <b>District Collectorate Office</b> and submit your application to the DM Office. After checking your application with all the details they will give a signed letter and your application.
            </p>

          <p><b>District Collectorate Location : </b> <a href="https://www.google.com/maps/place/District+Collectorate/@30.7307413,78.4418013,17z/data=!3m1!4b1!4m6!3m5!1s0x3908ed3a51868f1b:0x167518172da5cb42!8m2!3d30.7307367!4d78.4443762!16s%2Fg%2F1hf01wyhz?entry=tts" target="_blank">https://maps.goo.gl/Yz8uTNkmMWBjbyM5A</a></p>
          </div>

          {/* 👇 image optional */}
          {/* 
          <div className={styles.image}>
            <img src={carImg} alt="" />
          </div> 
          */}
        </div>

        {/* STEP 3 */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 3: Take your application and signed letter to District Thana</h3>
            <p>
              District Thana or Police Station Kotwali is located 500M from the District Collectorate. Here you will need to submit your letter and application. This will take some time and they will ask you a few questions. Once they are done they will sign your original letter.
            </p>
            <p>
              <b>Police Station Location : </b> <a  href="https://www.google.com/maps/place/Police+Station+Kotwali/@30.7289549,78.439391,18.35z/data=!4m6!3m5!1s0x3908ed05e5ffefb9:0x486e9040fe7890fe!8m2!3d30.728881!4d78.4408656!16s%2Fg%2F11krd9vdg2?entry=tts">https://maps.app.goo.gl/VKrk6cNnZEuQ92L57</a>
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 4: Visit the District Collectorate Again</h3>
            <p>
              Once again visit the DM office and submit your signed original copy. After checking all the signs and details they will generate a permit for your Nelong Valley Tour. Keep this permit safe with you.
            </p>

            <p>
              This permit wiil need to be shown at the checkpoint near <b>Bhaironghanti. </b>There you will also need to pay the <b>Gangotri National Park </b>entry fee which is around INR 250 per vehicle and INR 150 for each member of the car. 
            </p>
          </div>

            <div className={styles.image}>
            <img src={permit} alt="Vehicle Rental" />
          </div>
    
        </div>


       {/* IMPORTANT POINTS */}
<div className={styles.importantSection}>

  <h3 className={styles.importantTitle}>
    Important Points to Keep in Mind
  </h3>

  <ul className={styles.importantList}>

    <li>Keep 1–2 buffer days in between your permit process. Sometimes due to Govt holidays or other reasons it can take time.</li>

    <li>Keep 2–3 photocopies and an original copy of your Govt ID with you.</li>

    <li>Permits won’t be issued to Foreign nationals and NRIs.</li>

    <li>Mention your official name in your application, not the nickname.</li>

    <li>It usually takes 1–2 days to get the permit.</li>

    <li>Keep a check on the weather forecast. If it’s raining, permits won’t be issued.</li>

    <li>Permit is valid only for a day. Return before 5 PM.</li>

    <li>It’s cold in the valley, carry warm clothes.</li>

    <li>Keep enough water and snacks with you.</li>

    <li>Follow the Leave No Trace protocol.</li>

    <li>Carry binoculars in case you spot wildlife.</li>

  </ul>

</div>

        {/* ENQUIRE */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Enquire for Nelong Valley Permit</h3>
            <p>
              Contact us for quick and hassle-free permit assistance along with
              vehicle and travel support.
            </p>

            <a
              href="https://wa.me/918923259390"
              target="_blank"
              className={styles.btn}
            >
              Enquire Now
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Step;