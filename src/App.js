import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MouseTracker from './components/MouseTracker';
import Footer from './components/Footer';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <MouseTracker /> {/* Place it here at the top level */}
      <div className='container'>

      <Header />
      <main >
        <section id="home"><HeroSection /></section>
        <section id="about"><About /></section>
          <section id="technologies"><Technologies /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <section id='footer'><Footer /></section>
      </main>
      </div>
    </>
  
  );
}

export default App;
