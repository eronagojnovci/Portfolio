import React from 'react';
import '../styles/main.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Let’s Connect</h2>
      <p>If you’d like to work together or just want to say hi, feel free to reach out:</p>

      <div className="contact-links">
        <a href="mailto:eronagojnovcii@gmail.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> eronagojnovcii@gmail.com
        </a>

        <a href="https://www.linkedin.com/in/eron%C3%AB-gojnovci-b84109322/" className="contact-btn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> linkedin.com/in/erone
        </a>
         <a href="https://github.com/eronagojnovci" className="contact-btn" target="_blank" rel="noopener noreferrer">
          <FaGithub /> github.com/in/erone
        </a>
      </div>
    </section>
  );
};

export default Contact;
