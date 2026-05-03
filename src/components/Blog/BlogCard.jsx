import styles from "../../styles/Blog.module.css";

function BlogCard({ trek }) {
  return (
    <div className={styles.page}>

<div className={styles.hero}>
  <img src={trek.image} alt={trek.title} className={styles.heroImage} />

  <div className={styles.overlay}></div>

  <div className={styles.heroContent}>
    <h1 className={styles.highlight}>{trek.title}</h1>
    <p>{trek.subtitle}</p>
  </div>
</div>

      {/* CONTENT */}
      <section className={styles.section}>
        <div className={styles.container}>

          <div className={styles.content}>
            <h2>Overview</h2>
             <div className={styles.divider}></div>
            <p>{trek.overview}</p>
          </div>

          

          <div className={styles.content}>
            <h2>Why This Trek</h2>
             <div className={styles.divider}></div>
            <p>{trek.why}</p>
          </div>
          

          <div className={styles.content}>
            <h2>Itinerary</h2>
             <div className={styles.divider}></div>
            <ul className={styles.list}>
              {trek.itinerary?.map((day, i) => (
                <li key={i}>{day}</li>
              ))}
            </ul>
          </div>


          <div className={styles.content}>
            <h2>Best Time to Visit</h2>

             <div className={styles.divider}></div>
            <p>{trek.bestTime}</p>
          </div>
          

          <div className={styles.content}>
            <h2>Difficulty Level</h2>
             <div className={styles.divider}></div>
            <p>{trek.difficulty}</p>
          </div>

          <div className={styles.content}>
            <h2>How to Reach</h2>
             <div className={styles.divider}></div>
            <p>{trek.howToReach}</p>
          </div>
          

          <div className={styles.content}>
            <h2>Tips</h2>
             <div className={styles.divider}></div>
            <ul className={styles.list}>
              {trek.tips?.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

export default BlogCard;