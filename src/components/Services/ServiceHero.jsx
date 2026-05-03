import styles from "../../styles/ServiceHero.module.css";
import heroImage from "../../assets/servicesHero1.jpg";

import React from "react";

function ServiceHero() {
  return (
    <section className={styles.hero}>
      <img
        src={heroImage}
        alt="Travel services in Uttarkashi including vehicle booking and Char Dham Yatra"
        className={styles.heroImage}
      />

  
      <div className={styles.heroContent}>
        <h1>
          Travel <span className={styles.highlight}>Services</span> in
          Uttarakhand
        </h1>

        <p>
          Book vehicle services, Char Dham Yatra packages, Uttarkashi tour
          plans, and comfortable food & stay options with local experts.
        </p>
      </div>
    </section>
  );
}

export default ServiceHero;
