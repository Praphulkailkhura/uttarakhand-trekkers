import styles from "../../styles/Services.module.css";
import chardham from "../../assets/services/chardham.jpg";
import vehicle from "../../assets/services/vehicle.jpg";
import tours from "../../assets/services/uttarkashi.jpeg";
import foodstay from "../../assets/services/stay.jpg"

function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.servicesContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}>Our</span> Services
        </h2>

        <div className={styles.servicesGrid}>
          <div className={styles.servicesCard}>
            <img src={chardham} alt="Char Dham Yatra" />
            <div className={styles.servicesContent}>
              <h3>Char Dham Yatra</h3>
              <p>Experience the sacred Char Dham pilgrimage in Uttarakhand.</p>

              <a
                href="https://wa.me/918923259390?text=I%20want%20information%20about%20Char%20Dham%20Yatra"
                className={styles.contactBtn}
                target="_blank"
              >
                Contact Now
              </a>
            </div>
          </div>

          <div className={styles.servicesCard}>
            <img src={vehicle} alt="Vehicle Booking" />
            <div className={styles.servicesContent}>
              <h3>Vehicle Booking</h3>
              <p>Comfortable vehicles available for treks and tours.</p>

              <a
                href="https://wa.me/918923259390?text=I%20want%20vehicle%20booking%20information"
                className={styles.contactBtn}
                target="_blank"
              >
                Contact Now
              </a>
            </div>
          </div>

          <div className={styles.servicesCard}>
            <img src={tours} alt="Uttarkashi Tours" />
            <div className={styles.servicesContent}>
              <h3>Uttarkashi Tours</h3>
              <p>Explore beautiful destinations around Uttarkashi.</p>

              <a
                href="https://wa.me/918923259390?text=I%20want%20Uttarkashi%20tour%20details"
                className={styles.contactBtn}
                target="_blank"
              >
                Contact Now
              </a>
            </div>
          </div>

          <div className={styles.servicesCard}>
            <img src={foodstay} alt="Food and Stay in Uttarkashi" />

            <div className={styles.servicesContent}>
              <h3>Food & Stay</h3>

              <p>
                Comfortable stay and delicious local food available in
                Uttarkashi for trekkers and travelers.
              </p>

              <a
                href="https://wa.me/918923259390?text=I%20want%20food%20and%20stay%20in%20Uttarkashi"
                className={styles.contactBtn}
                target="_blank"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
