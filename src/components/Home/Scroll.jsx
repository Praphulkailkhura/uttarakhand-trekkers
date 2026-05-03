import { useEffect, useRef } from "react"
import gsap from "gsap"
import styles from "../../styles/Scroll.module.css"

function Scroll() {

  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current

    gsap.to(el, {
      x: "-50%",
      duration: 10,
      ease: "linear",
      repeat: -1
    })

  }, [])

  return (
    <section className={styles.scrollSection}>
      <div className={styles.scrollWrapper}>

        <h2 ref={textRef} className={styles.scrollText}>
          UTTARAKHAND TREKKERS • UTTARAKHAND TREKKERS • UTTARAKHAND TREKKERS • UTTARAKHAND TREKKERS •
        </h2>

        <div className={styles.copy}>
                  © 2026 All Rights Reserved.
                </div>

      </div>
    </section>
  )
}

export default Scroll