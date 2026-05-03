import { useState } from "react";
import styles from "../../styles/Faq.module.css";

function BlogFaq({ faqs = [] }) {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.left}>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Get complete information about this trek, planning, and travel details.
          </p>

          <div className={styles.ctaBox}>
            <h4>Need Help?</h4>
            <p>Get instant support for booking and planning.</p>
            <a href="https://wa.me/918923259390" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {faqs.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => setActive(active === i ? null : i)}
              >
                {item.question}
                <span>{active === i ? "−" : "+"}</span>
              </div>

              {active === i && (
                <div className={styles.answer}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogFaq;