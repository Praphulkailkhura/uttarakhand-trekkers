import styles from "../../styles/Gallery.module.css"

import img1 from "../../assets/gallery/Big1.jpg"
import img2 from "../../assets/gallery/small1.jpg"
import img3 from "../../assets/gallery/Big2.jpg"
import img4 from "../../assets/gallery/small2.jpg"

function Gallery(){
  return(

    <section className={styles.gallerySection}>

      <div className={styles.galleryContainer}>

        <h2 className={styles.title}>
        <span className={styles.highlight}>Explore</span> Uttarkashi
        </h2>

        <div className={styles.galleryGrid}>

          <img src={img1} className={styles.big} alt="Uttarkashi view"/>

          <img src={img2} className={styles.small} alt="Himalayan trek"/>

          <img src={img4} className={styles.small} alt="Mountain trail"/>

          <img src={img3} className={styles.big} alt="Himalayan landscape"/>

        </div>

      </div>

    </section>

  )
}

export default Gallery