// src/App.jsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}