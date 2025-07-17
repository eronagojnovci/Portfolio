import React, { useEffect } from 'react';
import '../styles/main.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import videoBg from '../assets/images/b.png';

const HeroSection = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.icon-wrap');

    icons.forEach((icon) => {
      icon.addEventListener('mousemove', (e) => {
        const rect = icon.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        icon.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.2)`;
      });

      icon.addEventListener('mouseleave', () => {
        icon.style.transform = `translate(0, 0) scale(1)`;
      });
    });

    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener('mousemove', () => {});
        icon.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="heroo">
        <div className="left">
          <h1>
            Computer Science<br />Graduate
          </h1>
        </div>
        <div className="right">
          <h2>Available for work</h2>
          <p>
            I am a recent Computer Science graduate, where I have gained significant knowledge and hands-on experience in web development and problem-solving.
          </p>
          <button className="cta">
            <a href="#contact">Let's Connect</a>
          </button>
          <div className="social-icons">
            <div className="icon-wrap">
              <a href="https://github.com/eronagojnovci" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} color="#fff" />
              </a>
            </div>
            <div className="icon-wrap">
              <a href="https://www.linkedin.com/in/eron%C3%AB-gojnovci-b84109322/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} color="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
