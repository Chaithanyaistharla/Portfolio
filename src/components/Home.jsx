// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-overlay">
        <h1>Hey, I’m Chaithanya Sujith Sinha Istharla</h1>
        <h2>But you can call me Chaithanya</h2>
        <p className="home-tagline">
          I’m a Software Developer &amp; Information Science graduate student
        </p>
        <div className="home-links">
          <Link to="/projects" className="home-link">→ see my projects</Link>
          <Link to="/about" className="home-link">→ more about me</Link>
        </div>
      </div>
    </section>
  );
}
