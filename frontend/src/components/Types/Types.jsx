import React from 'react';
import './Types.css';
import { assets } from '../../assets/frontendimages/assets.js';

const Types = () => {
  // Data for different types of solar panel installations
  const installationTypes = [
    {
      id: 1,
      type: "Rooftop Solar Panels",
      image: assets.rooftop, // Image from assets
      description: "Rooftop solar installations are ideal for homes and businesses with ample roof space. They are cost-effective and efficient, utilizing the space on your roof to generate electricity."
    },
    {
      id: 2,
      type: "Ground-Mounted Solar Panels",
      image: assets.ground, // Image from assets
      description: "Ground-mounted solar systems are installed on the ground rather than on rooftops. They are perfect for properties with plenty of open space and provide more flexibility in terms of panel"
    },
    {
      id: 3,
      type: "Solar Carports",
      image: assets.carport, // Image from assets
      description: "Solar carports are elevated structures that provide shade and protection for vehicles while generating solar power. They are ideal for parking lots and residential properties with limited roof space."
    },
    {
      id: 4,
      type: "Floating Solar Panels",
      image: assets.floating, // Image from assets
      description: "Floating solar installations are placed on water bodies, like lakes or reservoirs. They provide high efficiency due to natural cooling from the water and are a great option for water-rich areas."
    },
    {
      id: 5,
      type: "Agricultural Solar Panels",
      image: assets.agric, // Image from assets
      description: "Agricultural solar panels are designed for farms and agricultural setups. They provide power for irrigation systems and other farm equipment, promoting sustainable farming practices."
    }
  ];

  return (
    <div className="installation-types-container">
      <h1 className="installation-types-header">Types of Solar Panel Installations</h1>
      <div className="installation-types-list">
        {installationTypes.map((install) => (
          <div key={install.id} className="installation-type-card">
            <img className="installation-type-image" src={install.image} alt={install.type} />
            <h2 className="installation-type-title">{install.type}</h2>
            <p className="installation-type-description">{install.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;

