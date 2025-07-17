import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3,
  SiKotlin,
  SiGit,
  SiPython,
  SiTrello,
  SiJira,
  SiSpring, // Nëse preferon Spring në vend të FaCode
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa'; // Ikonë alternative për Java

import '../styles/main.scss';

const techStack = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Java', icon: FaCode }, 
  { name: 'MySQL', icon: SiMysql },
  { name: 'ReactJS', icon: SiReact },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Git', icon: SiGit },
  { name: 'Trello', icon: SiTrello },
  { name: 'Jira', icon: SiJira },
    { name: 'JavaFX', icon: SiSpring
    },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Technologies = () => {
  return (
    <section className="tech-section" id="technologies">
      <motion.div
        className="tech-header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Technologies I have had the chance to work with</h2>
      </motion.div>

      <motion.div
        className="tech-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techStack.map((tech) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="tech-item"
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 160 }}
            >
              <Icon size={40} />
              <span>{tech.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Technologies;
