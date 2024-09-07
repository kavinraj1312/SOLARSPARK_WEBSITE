import React from 'react';
import './Area.css';
import { assets } from '../../assets/frontendimages/assets.js';
import Types from '../../components/Types/Types.jsx';

const Area = () => {
  // Sample data for solar panel installations
  const installations = [
    {
      id: 1,
      type: "Residential Solar Panels",
      image: assets.resident
      , // Image from assets
      description: "Solar panels for residential homes to reduce electricity bills and promote sustainable living."
    },
    {
      id: 2,
      type: "Commercial Solar Panels",
      image: assets.commercial, // Image from assets
      description: "High-efficiency solar panels for commercial properties to lower operational costs and support corporate sustainability."
    },
    {
      id: 3,
      type: "Industrial Solar Panels",
      image: assets.industrial, // Image from assets
      description: "Robust solar panel systems designed for industrial facilities to meet high energy demands and reduce carbon footprint."
    },
    {
      id: 4,
      type: "Agricultural Solar Panels",
      image: assets.agricultural, // Image from assets
      description: "Solar panels tailored for agricultural use, providing energy solutions for farms and irrigation systems."
    },
  ];

  return (
    <div className="product-container">
      <h1 className="product-header">Our Installations Areas</h1>
      <div className="product-details">
        {installations.map((install) => (
          <div key={install.id} className="product-detail">
            <img className="product-detail-image" src={install.image} alt={install.type} />
            <div className="product-detail-text">
              <h2 className="product-detail-title">{install.type}</h2>
              <p className="product-detail-description">{install.description}</p>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Area;
