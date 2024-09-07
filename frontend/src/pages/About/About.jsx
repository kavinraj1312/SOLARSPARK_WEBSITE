import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Learn more about who we are, our vision, and what drives us.</p>
      </header>

      <section className="about-section vision">
        <h2>Our Vision</h2>
        <p>
          Our vision is to create a sustainable future by providing innovative solar solutions that make renewable energy accessible to everyone. We aspire to be a global leader in the solar industry, driving positive environmental impact through cutting-edge technology and exceptional service.
        </p>
      </section>

      <section className="about-section mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality solar products and services that exceed customer expectations. We are committed to advancing solar technology, supporting local communities, and contributing to a cleaner planet. Our goal is to empower individuals and businesses to embrace renewable energy and achieve their sustainability goals.
        </p>
      </section>

      <section className="about-section team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>Amaran</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Vinoth</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Dixon</h3>
            <p>Marketing Director</p>
          </div>
        </div>
      </section>

      <section className="about-section values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We uphold the highest ethical standards in all our dealings.</li>
          <li>Innovation: We continuously seek new and better ways to serve our customers.</li>
          <li>Customer Focus: Our customers are at the heart of everything we do.</li>
          <li>Sustainability: We are dedicated to promoting environmental stewardship.</li>
          <li>Collaboration: We believe in the power of teamwork and building strong relationships.</li>
        </ul>
      </section>

      
    </div>
  );
}

export default About;
