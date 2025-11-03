import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>🌾 Our Rural Services 🌾</h1>
        <p>
          We’re dedicated to improving the lives of rural communities through sustainable
          and accessible services that promote growth, health, and education.
        </p>
      </header>

      <section className="services-grid">
        <div className="service-card">
          <span className="icon">🚜</span>
          <h3>Farming Assistance</h3>
          <p>
            Get expert advice, modern farming techniques, and access to quality seeds and fertilizers.
          </p>
        </div>

        <div className="service-card">
          <span className="icon">💧</span>
          <h3>Water Management</h3>
          <p>
            Reliable water supply systems for irrigation and daily needs — ensuring clean water for all.
          </p>
        </div>

        <div className="service-card">
          <span className="icon">🏥</span>
          <h3>Health Camps</h3>
          <p>
            Regular medical check-ups, free medicines, and awareness programs for better rural health.
          </p>
        </div>

        <div className="service-card">
          <span className="icon">📚</span>
          <h3>Education Support</h3>
          <p>
            Providing learning materials, scholarships, and online resources to empower rural students.
          </p>
        </div>

        <div className="service-card">
          <span className="icon">🔌</span>
          <h3>Digital Services</h3>
          <p>
            Online bill payments, government forms, and digital training for modern rural connectivity.
          </p>
        </div>

        <div className="service-card">
          <span className="icon">🚚</span>
          <h3>Delivery Support</h3>
          <p>
            Doorstep delivery of essentials and agricultural products to save time and effort.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
