import React from 'react';
import './Services.css';
import Types from '../../components/Types/Types';

const Services = () => {
  return (
    <div className="services-container">
      {/* Introduction Section */}
      <section className="services-intro">
        <h2 className="services-header">Our Installation Services</h2>
        <p className="services-description">
          At our company, we provide a range of solar panel installation services tailored to meet the diverse needs of our customers. Whether you're looking to reduce energy bills for your home, support sustainability for your business, or power agricultural activities with clean energy, we have the perfect solution for you.
        </p>
      </section>

      {/* Types of Installations Section */}
      <section className="services-types">
        <Types />
      </section>

      {/* Unique Features or Benefits Section */}
      <section className="services-benefits">
        <h2 className="benefits-header">Why Choose Us?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3 className="benefit-title">Expert Team</h3>
            <p className="benefit-description">
              Our team consists of highly skilled professionals with years of experience in solar panel installations. We ensure safe, efficient, and reliable installations every time.
            </p>
          </div>
          <div className="benefit-item">
            <h3 className="benefit-title">Customized Solutions</h3>
            <p className="benefit-description">
              We offer customized solutions to suit different types of properties, energy needs, and budgets, ensuring optimal performance and maximum savings.
            </p>
          </div>
          <div className="benefit-item">
            <h3 className="benefit-title">Sustainable Practices</h3>
            <p className="benefit-description">
              We are committed to promoting sustainability by using high-quality materials and adhering to environmentally friendly practices in every project we undertake.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
