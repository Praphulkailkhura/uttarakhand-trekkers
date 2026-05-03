import styles from "../../styles/Step.module.css";
import permit from "../../assets/Permit.jpeg";

function Step() {
  return (
    <section className={styles.section}>

      <div className={styles.container}>

        {/* STEP 1 */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 1: Write an Application for Nelong Valley Permit</h3>
            <p>
              To begin the process, write an application addressed to the District Magistrate (DM) of Uttarkashi requesting permission to visit Nelong Valley.
            </p>
            <p>
              Include details of all travelers, travel dates, vehicle information, and the purpose of your visit. Attach photocopies of valid government ID proofs and keep at least 2 copies with you.
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 2: Submit Application at District Collectorate</h3>
            <p>
              Visit the District Collectorate Office in Uttarkashi and submit your application to the DM office for approval.
            </p>
            <p>
              Officials will review your application and verify your details. Once approved, you will receive a signed letter required for further verification.
            </p>

            <p>
              <b>Location: </b>
              <a 
                href="https://maps.app.goo.gl/Yz8uTNkmMWBjbyM5A" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 3: Police Verification at District Thana</h3>
            <p>
              After receiving the signed letter, visit the District Thana (Police Station) for verification.
            </p>
            <p>
              Submit your documents along with the signed letter. The police may ask a few questions before verifying your application.
            </p>
            <p>
              Once verification is complete, your documents will be signed and approved by the police department.
            </p>

            <p>
              <b>Location: </b>
              <a 
                href="https://maps.app.goo.gl/VKrk6cNnZEuQ92L57" 
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className={styles.step}>
          <div className={styles.content}>
            <h3>Step 4: Final Approval and Permit Issuance</h3>
            <p>
              Return to the District Collectorate with your verified documents and submit them for final approval.
            </p>
            <p>
              After checking all documents, your Nelong Valley permit will be issued. Keep the permit safe as it will be checked at entry points.
            </p>
            <p>
              You will need to show this permit at Bhaironghati checkpoint and pay the entry fee (approximately ₹250 per vehicle and ₹150 per person).
            </p>

            <div className={styles.image}>
              <img src={permit} alt="Nelong Valley Permit document" />
            </div>
          </div>
        </div>

        {/* IMPORTANT POINTS */}
        <div className={styles.importantSection}>
          <h3 className={styles.importantTitle}>
            Important Points for Nelong Valley Permit
          </h3>

          <ul className={styles.importantList}>
            <li>Keep 1–2 buffer days for the permit process.</li>
            <li>Carry original ID proofs and photocopies.</li>
            <li>Permits are usually not issued to foreign nationals.</li>
            <li>Ensure all details match your ID proof.</li>
            <li>The permit process usually takes 1–2 days.</li>
            <li>Permits may not be issued during bad weather conditions.</li>
            <li>The permit is valid for one day only.</li>
            <li>Carry warm clothes, water, and essential items.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>

  <h3 className={styles.ctaTitle}>
    Still Confused About <span className={styles.highlight}>Nelong Valley Permit?</span>
  </h3>

  <p className={styles.ctaText}>
    Don’t worry — we can help you with the complete Nelong Valley permit process,
    including documentation, travel planning, and vehicle arrangements.
  </p>

  <div className={styles.ctaPoints}>
    <span>✔ Fast Process</span>
    <span>✔ Expert Guidance</span>
    <span>✔ Complete Support</span>
  </div>

  <a
    href="https://wa.me/918923259390"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.ctaBtn}
  >
    Chat on WhatsApp
  </a>

</div>

      </div>

    </section>
  );
}

export default Step;