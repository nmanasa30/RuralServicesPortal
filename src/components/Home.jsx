import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>🌾 Welcome to Rural Services Portal 🌾</h1>
        <p>
          Empowering rural communities with essential services, education, and resources — 
          bringing progress closer to every home.
        </p>
        <button
          className="explore-btn"
          onClick={() => (window.location.href = "/services")}
        >
          Explore Our Services
        </button>
      </header>

      <section className="home-sections">
        <div className="card">
          <span className="icon">🚜</span>
          <h3>Farming Assistance</h3>
          <p>Expert help and tools for better, smarter farming.</p>
        </div>

        <div className="card">
          <span className="icon">💧</span>
          <h3>Water Supply</h3>
          <p>Clean and reliable water access for every household.</p>
        </div>

        <div className="card">
          <span className="icon">🏥</span>
          <h3>Health Camps</h3>
          <p>Free medical check-ups and medicines for all.</p>
        </div>

        <div className="card">
          <span className="icon">📚</span>
          <h3>Education Support</h3>
          <p>Scholarships and learning resources for students.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
