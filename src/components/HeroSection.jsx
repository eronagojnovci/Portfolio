import React from 'react';
import '../styles/main.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import videoBg from '../assets/images/moon.mp4';

const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <div className="text-zone">
          <h1>
            <span className="gradient-text">Eronë Gojnovci</span><br />
            Computer Science Graduate
          </h1>
          <p>Hi, I’m a Computer Science graduate with hands-on experience in web development, programming, and problem-solving. I enjoy creating user-friendly digital experiences and love turning ideas into real solutions.
          </p>
          <a href="#contact" className="cta">Let's Work Together</a>
        </div>

        <div className="social-zone">
          <a href="https://github.com/eronagojnovci" className="icon" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/eronë-gojnovci-b84109322/" className="icon" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
