import styles from "../../styles/Treks.module.css";
import { useNavigate } from "react-router-dom";

import dayara from "../../assets/treks/dayara.jpg";
import jorai from "../../assets/treks/jorai.jpg";
import dodital from "../../assets/treks/dodital.jpg";
import gomukh from "../../assets/treks/gomukh.jpg";
import tungnath from "../../assets/treks/tungnath.jpg";

function Treks() {
  const navigate = useNavigate();

  const treks = [
    {
      name: "Dayara Bugyal Trek",
      slug: "dayara-bugyal-trek",
      image: dayara,
      desc: "Dayara Bugyal trek in Uttarakhand is a famous alpine meadow trek ideal for beginners and nature lovers.",
    },
    {
      name: "Jorai Bugyal Trek",
      slug: "jorai-bugyal-trek",
      image: jorai,
      desc: "Jorai Bugyal trek in Uttarkashi offers peaceful trails and stunning Himalayan views.",
    },
    {
      name: "Dodital Trek",
      slug: "dodital-trek",
      image: dodital,
      desc: "Dodital trek is a scenic lake trek in Uttarakhand surrounded by forests and mountains.",
    },
    {
      name: "Gomukh Tapovan Trek",
      slug: "gomukh-tapovan-trek",
      image: gomukh,
      desc: "Gomukh Tapovan trek leads to the source of River Ganga with breathtaking Himalayan landscapes.",
    },
    {
      name: "Tungnath Trek",
      slug: "tungnath-trek",
      image: tungnath,
      desc: "Tungnath trek takes you to the highest Shiva temple with panoramic mountain views.",
    },
  ];

  return (
    <section className={styles.treksSection} id="treks">
      <div className={styles.treksContainer}>

        {/* MAIN HEADING */}
        <h2 className={styles.sectionTitle}>
          Best <span className={styles.highlight}>Treks</span> in Uttarakhand
        </h2>

        {/* SEO SUBTEXT */}
        <p className={styles.sectionSubtext}>
           Discover the most beautiful treks in Uttarakhand with breathtaking views.
        </p>

        {/* LIST (SEO IMPORTANT) */}
        <div className={styles.treksGrid}>
          {treks.map((trek, index) => (
            <article
              key={index}
              className={styles.trekCard}
              onClick={() => navigate(`/treks/${trek.slug}`)}
            >
              <img
                src={trek.image}
                alt={`${trek.name} in Uttarakhand`}
                loading="lazy"
              />

              <div className={styles.cardContent}>
                <h3>{trek.name}</h3>
                <p>{trek.desc}</p>
                <button className={styles.trekBtn}>View Details</button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Treks;