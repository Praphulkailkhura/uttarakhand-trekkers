import styles from "../../styles/ServiceCard.module.css";
import { Link } from "react-router-dom";

function ServiceCard({
  title,
  subtitle,
  image,
  content,
  points,
  slug,
  reverse,
}) {
  return (
    <div id={slug} className={styles.card}>
      {/* TOP */}
      <div className={styles.top}>
        <h2 className={styles.highlight}>{title}</h2>
        <p>{subtitle}</p>
        <div className={styles.divider}></div>
      </div>

      {/* BOTTOM */}
      <div className={`${styles.bottom} ${reverse ? styles.reverse : ""}`}>
        {/* IMAGE */}
        <div className={styles.left}>
          <img src={image} alt={title} />
        </div>

        {/* CONTENT */}
        <div className={styles.right}>
          <p className={styles.desc}>{content}</p>

          <ul className={styles.points}>
            {points.map((item, i) => (
              <li key={i}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/918923259390?text=${encodeURIComponent(
              `Hi, I want info about ${title}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
