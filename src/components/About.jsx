import React from 'react';
import '../styles/main.scss';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-card">
          <div className="about-image"></div>

          <div className="about-text">
            <h2>About Me</h2>
            <p>
            I’m Eronë, a Computer Science graduate with a passion for building clean, responsive, and user-friendly web applications. Explore my work and see how I turn ideas into code.
            </p>

            <div className="about-details">
              <div className="detail-block">
                <h3>Education</h3>
                <ul>
                  <li>Bachelor's Degree in Computer Science</li>
                  <li>University of Pristina "Hasan Prishtina"</li>
                  <li>Graduated: 2025</li>
                </ul>
              </div>

              <div className="detail-block">
                <h3>Certifications</h3>
                <ul>
                  <li>React JavaScript Programming — BIT Academy</li>
                  <li>
                    Responsive Web Design —{' '}
                    <a
                      href="https://www.freecodecamp.org/certification/fcce7f016bc-67fd-4dbc-a4e3-7fb2fe934bea/responsive-web-design"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Certificate Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
