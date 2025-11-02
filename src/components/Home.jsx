import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>🌾 Welcome to Rural Services Portal 🌾</h1>
        <p>
          Empowering rural communities with essential services, education, and resources — 
          all in one platform designed to bring progress closer to home.
        </p>
        <button
          className="explore-btn"
          onClick={() => (window.location.href = "/services")}
        >
          Explore Our Services
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <span className="icon">🚜</span>
          <h3>Farming Assistance</h3>
          <p>Get expert guidance and tools for modern, efficient farming.</p>
        </div>
        <div className="feature-card">
          <span className="icon">💧</span>
          <h3>Water Supply</h3>
          <p>Access reliable and clean water solutions for your area.</p>
        </div>
        <div className="feature-card">
          <span className="icon">🏥</span>
          <h3>Health Camps</h3>
          <p>Stay healthy with free check-ups and mobile clinics nearby.</p>
        </div>
        <div className="feature-card">
          <span className="icon">📚</span>
          <h3>Education Support</h3>
          <p>Scholarships and learning programs for rural youth.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
