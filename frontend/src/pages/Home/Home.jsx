import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import { assets } from '../../assets/frontendimages/assets.js';

import { Link } from 'react-router-dom';

const Home = () => {
  // State to control the visibility of the contact details
  const [showContactDetails, setShowContactDetails] = useState(false);

  // Function to handle the button click event
  const handleContactClick = () => {
    setShowContactDetails(!showContactDetails); // Show contact details when button is clicked
  };

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Solar Spark</h1>
          <p>Powering a sustainable future with clean and efficient solar energy solutions.</p>
          <button className="cta-button"><Link to="/about">About us</Link></button>
        </div>
        <div className="hero-image">
          <img src={assets.hero} alt="Solar Panels" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At Solar Spark, we are dedicated to providing high-quality solar panel installation services to help you harness the power of the sun. Our team of experts ensures a seamless and efficient installation process that maximizes energy output and savings.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>High Efficiency Panels</h3>
            <p>We provide top-of-the-line solar panels that offer maximum efficiency and longevity.</p>
          </div>
          <div className="feature-item">
            <h3>Experienced Team</h3>
            <p>Our certified professionals have years of experience in solar energy installations.</p>
          </div>
          <div className="feature-item">
            <h3>Affordable Pricing</h3>
            <p>Get the best value for your investment with our competitive pricing and financing options.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Solar Spark made the entire process easy and stress-free. Our energy bills have significantly reduced!"</p>
          </div>
          <div className="testimonial-item">
            <p>"Highly recommend Solar Spark for their professionalism and quality service."</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Switch to Solar?</h2>
        <p>Contact us today to learn more about our services and get a customized solar solution for your home or business.</p>
        <button className="cta-button" onClick={handleContactClick}>Contact Us</button>

        {/* Contact Details */}
        {showContactDetails && (
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p><strong>Name:</strong> Amaran</p>
            <p><strong>Email:</strong> amaran@gmail.com</p>
            <p><strong>Phone:</strong> 9876543210</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
