import React from 'react';
import '../styles/main.scss';

const projects = [
  {
    title: 'Cup of joy',
    description: "An app designed to be an online coffee shop.",
    link: 'https://cupofjoycoffeshop.netlify.app/',
    tech: "HTML, CSS, JS",
  },
  {
    title: 'EronePhotography',
    description: "A simple website to showcase my photography.",
    link: 'https://eronephotography.netlify.app/',
    tech: "HTML, CSS, JS",
  },
  {
    title: 'MyMmmmood',
    description: "A website built to focus on mental health.",
    link: 'https://mymmmood.netlify.app/',
    tech: "React.JS",
  },
  {
    title: 'LibraryManager',
    description: "A library app made with JavaFX to manage book lending.",
    link: 'https://github.com/eronagojnovci/library',
    tech: "Java, JavaFX",
  },
];

const Projects = () => {
  return (
    <section className="projects-wrapper" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <article className="card" key={index}>
            <div>
              <h2>{project.title}</h2>
              <h3>{project.tech}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="view-more-container">
        <a className="view-more-btn" href="https://github.com/eronagojnovci/library">View More Projects</a>
      </div>
    </section>
  );
};

export default Projects;
