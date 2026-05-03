import styles from "../../styles/Gallery.module.css"

import img1 from "../../assets/gallery/big1.jpg"
import img2 from "../../assets/gallery/small1.jpg"
import img3 from "../../assets/gallery/big2.jpg"
import img4 from "../../assets/gallery/small2.jpg"

function Gallery(){

  const galleryData = [
    {
      img: img1,
      className: "big",
      alt: "Dayara Bugyal mountain view in Uttarkashi Uttarakhand Himalayas",
      caption: "Dayara Bugyal trek scenic view in Uttarkashi"
    },
    {
      img: img2,
      className: "small",
      alt: "Himalayan trekking trail in Uttarkashi with forest and mountains",
      caption: "Trekking trail in Uttarkashi Uttarakhand"
    },
    {
      img: img4,
      className: "small",
      alt: "Mountain valley and trail view in Uttarakhand Himalayas",
      caption: "Beautiful valley view in Uttarkashi"
    },
    {
      img: img3,
      className: "big",
      alt: "Panoramic Himalayan landscape in Uttarkashi Uttarakhand",
      caption: "Himalayan landscape view in Uttarkashi"
    }
  ]

  return(

    <section 
      className={styles.gallerySection}
      id="gallery"
      aria-labelledby="gallery-heading"
    >

      <div className={styles.galleryContainer}>

        {/* SEO HEADING */}
        <h2 id="gallery-heading" className={styles.sectionTitle}>
          Uttarkashi Travel <span className={styles.highlight}>Gallery</span>
        </h2>

        {/* SEO SUBTEXT */}
        <p className={styles.subText}>
          Explore stunning views of Uttarkashi, including Himalayan mountains,
          trekking routes, valleys, and natural landscapes. Discover the beauty
          of Uttarakhand through real travel experiences and scenic destinations.
        </p>

        {/* GALLERY */}
        <div className={styles.galleryGrid}>

          {galleryData.map((item, index) => (
            <figure key={index} className={styles[item.className]}>

            <div className={styles.galleryCard}>
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />
</div>  
              {/* hidden SEO caption */}
              <figcaption className={styles.visuallyHidden}>
                {item.caption}
              </figcaption>

            </figure>
          ))}

        </div>

      </div>

    </section>

  )
}

export default Gallery