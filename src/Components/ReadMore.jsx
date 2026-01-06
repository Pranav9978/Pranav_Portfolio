import React from "react";
import "./ReadMore.css";

const ReadMore = () => {
  return (
    <div className="readmore-container">
      <h1>About Me</h1>
      <p className="intro">
        I’m a passionate developer focused on building impactful and user-friendly applications.
        Here’s a deeper look into my journey.
      </p>

      <section className="section">
        <h2>🎓 Education</h2>
        <ul>
          <li>Bachelor of Computer Application– Vivekanand College Kolhapur (2023 - 2026)</li>
          <li>12th Grade – SHRI P B PATIL HIGHSCHOOL and JR COLLEGE MUDAL (2021 - 2023)</li>
        </ul>
      </section>

      <section className="section">
        <h2>📜 Certifications</h2>
        <ul>
          <li>Full-Stack Development Certification</li>
        
          
        </ul>
      </section>

      <section className="section">
        <h2>💼 Experience</h2>
        <ul>
          <li>Intern – Web Development at Company A (3 Months)</li>
          <li>Freelancer – Built portfolio websites and inventory systems</li>
        </ul>
      </section>

      <section className="section">
        <h2>🚀 Projects</h2>
        <ul>
          <li>Library Management System (React + Spring Boot)</li>
          <li>Mall Product Inventory Dashboard</li>
          <li>Personal Portfolio Website</li>
          <li>Weather app with auto-location</li>
        </ul>
      </section>
    </div>
  );
};

export default ReadMore;
