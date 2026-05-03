import { useNavigate } from "react-router-dom";
import styles from "../../styles/Services.module.css";
import chardham from "../../assets/services/chardham.jpg";
import vehicle from "../../assets/services/vehicle.jpg";
import tours from "../../assets/services/uttarkashi.jpeg";
import foodstay from "../../assets/services/stay.jpg"

function Services() {
  const navigate = useNavigate();

  return (
    <section className={styles.servicesSection} id="services">
  <div className={styles.servicesContainer}>

    <h2 className={styles.sectionTitle}>
      Best <span className={styles.highlight}>Travel Services</span> in Uttarakhand
    </h2>

    <p className={styles.subText}>
      We provide complete travel and trekking services in Uttarakhand including Char Dham Yatra packages, vehicle booking, Uttarkashi tours, and food & stay arrangements.
    </p>

    <div className={styles.servicesGrid}>

      {[
        {
          img: chardham,
          title: "Char Dham Yatra Package",
          desc: "Complete Char Dham Yatra packages covering Kedarnath, Badrinath, Gangotri and Yamunotri with travel and stay.",
          link: "I%20want%20Char%20Dham%20Yatra%20package%20details",
          slug: "char-dham-yatra-package"
        },
        {
          img: vehicle,
          title: "Vehicle Booking in Uttarkashi",
          desc: "Book taxis, tempo travellers and SUVs for treks, tours and Char Dham Yatra with experienced drivers.",
          link: "I%20want%20vehicle%20booking%20in%20Uttarkashi",
          slug: "vehicle-booking-uttarkashi"
        },
        {
          img: tours,
          title: "Uttarkashi Tour Packages",
          desc: "Explore Uttarkashi with guided tour packages including sightseeing, treks and hidden destinations.",
          link: "I%20want%20Uttarkashi%20tour%20packages",
          slug: "uttarkashi-tour-packages"
        },
        {
          img: foodstay,
          title: "Food & Stay in Uttarkashi",
          desc: "Comfortable stays and hygienic food options available for trekkers and travelers in Uttarkashi.",
          link: "I%20want%20food%20and%20stay%20in%20Uttarkashi",
          slug: "food-stay-uttarkashi"
        }
      ].map((service, index) => (
        <div className={styles.servicesCard} key={index}>
          <img src={service.img} alt={service.title} />

          <div className={styles.servicesContent}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <button
  onClick={() => navigate(`/services#${service.slug}`)}
  className={styles.contactBtn}
>
  View Details
</button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
  );
}

export default Services;
