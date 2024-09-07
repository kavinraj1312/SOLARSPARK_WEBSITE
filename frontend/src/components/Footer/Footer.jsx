import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import { assets } from '../../assets/frontendimages/assets';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        {/* Footer Left Section */}
        <div className='footer-left'>
          <h2 className='logo'><Link to='/'>SolarSpark.</Link></h2>
          <p>
            Empowering a sustainable future with innovative solar panel installation solutions. We provide high-quality, cost-effective solar energy systems tailored to meet your energy needs. Join us in harnessing the power of the sun to build a greener tomorrow.
          </p>
          <div className='social-media-icons'>
            <img src={assets.facebook_icon} alt='Facebook Icon' />
            <img src={assets.twitter_icon} alt='Twitter Icon' />
          </div>
        </div>
        
        {/* Footer Center Section */}
        <div className='footer-center'>
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Footer Right Section */}
        <div className='footer-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>kavin@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className='footer-copyright'>
        &copy; 2024 SolarSpark.com - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
