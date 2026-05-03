import styles from "../../styles/Card.module.css";
import { Link } from "react-router-dom";

function Card({ title, subtitle, image, content, points, slug, reverse }) {
  return (
    <div className={styles.card}>

      <div className={styles.top}>
        <div className={styles.titleRow}>
          {/* <span className={styles.dot}></span> */}
          <h2 className={styles.highlight}>{title}</h2>
        </div>
        <p>{subtitle}</p>
        <div className={styles.divider}></div>
      </div>

 
      <div className={`${styles.bottom} ${reverse ? styles.reverse : ""}`}>


        <div className={styles.left}>
          <img src={image} alt={title} />
        </div>


        <div className={styles.right}>

          <p className={styles.desc}>{content}</p>

          <ul className={styles.points}>
            {points.map((item, i) => (
              <li key={i}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>

          <Link to={`/treks/${slug}`} className={styles.btn}>
            Read More
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Card;