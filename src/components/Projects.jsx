import React from 'react';
import project1 from '../assets/images/image5.png';
import project2 from '../assets/images/image1.png';
import project3 from '../assets/images/image2.png';
import project from '../assets/images/image.png';
import project5 from '../assets/images/image4.png';
import project6 from '../assets/images/erona.png';





const projects = [
  {
    title: 'Cup of Joy',
    description: 'A coffee shop website built on Html,CSS,JS',
    imageUrl: project1,
    repoUrl: 'https://cupofjoycoffeshop.netlify.app/',
  },
   {
    title: 'Library',
    description: 'A booktstore app built on Java and JavaFX',
    imageUrl: project,
    repoUrl: 'https://cupofjoycoffeshop.netlify.app/',
  },
  {
    title: 'Calculator App',
    description: 'A calculator application built on Java and JavaFX ',
    imageUrl: project2,
    repoUrl: 'https://github.com/eronagojnovci/Calculator.App',
  },
  {
    title: 'Mymmmood',
    description: 'A mental health website built on ReactJS ',
    imageUrl: project3,
    repoUrl: 'https://mymmmood.netlify.app/',
  },
  {
    title: 'Online Exam',
    description: 'An online exam built on Java ',
    imageUrl: project5,
    repoUrl: 'https://github.com/eronagojnovci/online-exam',
  },
  {
    title: 'Portfolio',
    description: 'A portfolio built on ReactJS application built on Java and JavaFX ',
    imageUrl: project6,
    repoUrl: 'https://eronegojnovci.netlify.app/',
  },
];
const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, imageUrl, demoUrl, repoUrl }) => (
          <div key={title} className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="project-links">
             
                {repoUrl && (
                  <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container">
        <a
          href="https://github.com/eronagojnovci"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          View More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
