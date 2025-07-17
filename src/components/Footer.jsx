import React from 'react';
import '../styles/main.scss';
import logo from '../assets/images/moon.png';
import { FaDove } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className='footer'>
      <div className="rotating-footer">
        <div className="rotating-circle">
          <img src={logo} alt="logo" className="center-logo" />
          <svg className="rotating-svg" viewBox="0 0 200 200">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>
            <text className="svg-text">
              <textPath href="#circlePath" startOffset="0%">
                DESIGN · CODE · CREATE · DESIGN · CODE · CREATE ·
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <div className="footer-text">
        <p>© All rights reserved by Erona</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
