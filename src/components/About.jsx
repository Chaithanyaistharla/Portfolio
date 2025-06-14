import React from 'react';
import { fadeInUp } from '../animations';
import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <motion.section
      id="about"
      className="container"
      variants={fadeInUp}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src={profileImg}
          alt="Chaithanya Sujith Sinha Istharla"
          className="about-photo"
        />
        <div className="about-text">
          <p>
          I’m a passionate software developer currently pursuing my Master of Science in Information Science at the University of North Texas. With a solid foundation in full-stack development, I’ve built end-to-end applications from a Django-based HRMS and website-integrated chatbot during my internship at iQ Tree Tech Soft, to machine-learning projects like an Offline Fake Job Post Detector and a Soil-Based Crop Predictor. My technical toolkit spans Python, JavaScript (React.js, Node.js), Django, and modern databases (SQL, MongoDB), and I’m always eager to explore new frameworks and methodologies that drive efficient, scalable solutions.
          </p>
          <p>
          Beyond code, I’m driven by user-centered design and data-driven problem solving. In my projects, I balance clean, intuitive interfaces with rigorous back-end logic whether crafting interactive React prototypes or tuning bi-directional LSTM models to 97% accuracy. I thrive in collaborative environments, translating stakeholder goals into polished, production-ready products. As I continue to grow in both software engineering and information science, I’m excited to apply my blend of technical expertise and creative thinking to build the next generation of impactful applications.</p>
        </div>
      </div>
    </motion.section>
  );
}