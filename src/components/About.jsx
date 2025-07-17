import React, { useRef, useEffect } from 'react';
import '../styles/main.scss';

const About = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;

    const handleMouseMove = (e) => {
      if (!img) return;
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      img.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) scale(1.06)`;
    };

    const handleMouseLeave = () => {
      if (img) img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    };

    img?.addEventListener('mousemove', handleMouseMove);
    img?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      img?.removeEventListener('mousemove', handleMouseMove);
      img?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section >
      <div className="about-card">
      <div
        className="about-image"
        ref={imageRef}
      ></div>

      <div className="about-info">
        <h3>Education</h3>
        <ul>
          <li>Bachelor's Degree in Computer Science</li>
          <li>University of Pristina "Hasan Prishtina"</li>
          <li>Graduated: 2025</li>
        </ul>

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
    </section>
  );
};

export default About;
