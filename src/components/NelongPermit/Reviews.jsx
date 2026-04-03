import { useState, useEffect, useRef } from "react";
import styles from "../../styles/Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    city: "",
    text: "",
    image: ""
  });

  const fileRef = useRef();

  // ✅ LOAD (runs once)
  useEffect(() => {
    const data = localStorage.getItem("reviews");

    if (data) {
      setReviews(JSON.parse(data));
    }
  }, []);

  // ✅ SAVE (runs whenever reviews change)
  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  // 🔥 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 IMAGE → BASE64
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result
      }));
    };

    reader.readAsDataURL(file);
  };

  // 🔥 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.city || !form.text) {
      alert("Fill all fields");
      return;
    }

    const newReview = {
      id: Date.now(),
      ...form
    };

    const updated = [newReview, ...reviews];

    setReviews(updated);

    // ⚠️ FORCE SAVE (IMPORTANT FIX)
    localStorage.setItem("reviews", JSON.stringify(updated));

    // reset
    setForm({
      name: "",
      city: "",
      text: "",
      image: ""
    });

    fileRef.current.value = "";
  };

  return (
    <div className={styles.reviewSection}>
      <h2>User Reviews</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          name="city"
          placeholder="Your City"
          value={form.city}
          onChange={handleChange}
          className={styles.input}
        />

        <textarea
          name="text"
          placeholder="Write your experience..."
          value={form.text}
          onChange={handleChange}
          className={styles.textarea}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          ref={fileRef}
          className={styles.fileInput}
        />

        <button type="submit" className={styles.button}>
          Post Review
        </button>
      </form>

      <div className={styles.reviewsList}>
        {reviews.map((r) => (
          <div key={r.id} className={styles.reviewCard}>
            <b>{r.name}</b>
            <div className={styles.city}>{r.city}</div>
            <p>{r.text}</p>

            {r.image && (
              <img src={r.image} className={styles.image} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;