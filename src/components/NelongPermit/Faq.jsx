import { useState } from "react";
import styles from "../../styles/Faq.module.css";

const faqs = [
  {
    q: "How to get Nelong Valley permit?",
    a: "You need to apply offline at the District Magistrate (DM) office in Uttarkashi. The process includes application submission, police verification, and final approval.",
  },
  {
    q: "How to get Nelong Jadung Valley permit?",
    a: "The process is the same. Submit your application at the DM office, complete police verification, and collect your final permit from the collectorate.",
  },
  {
    q: "Is Nelong Valley permit available online?",
    a: "No, currently the permit process is completely offline and requires visiting Uttarkashi offices.",
  },
  {
    q: "What is the cost of Nelong Valley permit?",
    a: "The cost is approximately ₹250 per vehicle and ₹150 per person, payable at Bhaironghati checkpoint.",
  },
  {
    q: "How many days does it take to get the permit?",
    a: "The process usually takes 1–2 days depending on approval and verification.",
  },
  {
    q: "What is the best time to visit Nelong Valley?",
    a: "The best time is from May to October when roads are accessible and weather is clear.",
  },
  {
    q: "What is the temperature in Nelong Valley?",
    a: "Temperature ranges from 5°C to 20°C in summer and can go below 0°C in winter.",
  },
  {
    q: "Is Gartang Gali included in Nelong Valley permit?",
    a: "Yes, it is usually included but depends on weather and authority permissions.",
  },
  {
    q: "How to get Gartang Gali permit?",
    a: "You don’t need a separate permit. It is covered under Nelong Valley permit.",
  },
  {
    q: "Is vehicle booking available from Uttarkashi?",
    a: "Yes, local travel operators provide vehicle booking along with permit assistance.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Get complete information about how to get Nelong Valley permit,
            required documents, permit cost, best time to visit, temperature
            conditions, and travel planning from Uttarkashi. This guide answers
            the most common questions to help you plan your trip easily.
          </p>

          <div className={styles.ctaBox}>
            <h4>Need Help with Nelong Valley Permit?</h4>
            <p>
              Get instant assistance for Nelong Valley permit, vehicle booking,
              and complete travel planning from local experts.
            </p>
            <a href="https://wa.me/918923259390" target="_blank">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {faqs.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <div
                className={styles.question}
                onClick={() => setActive(active === i ? null : i)}
              >
                {item.q}
                <span>{active === i ? "−" : "+"}</span>
              </div>

              {active === i && <div className={styles.answer}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
