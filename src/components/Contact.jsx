import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>Contact</h2>
        <ul>
          <li><FaEnvelope /><span>Email: <a href="mailto:chaithanyasujithistharla@my.unt.edu">chaithanyasujithistharla@my.unt.edu</a></span></li>
          <li><FaLinkedin /><span>LinkedIn: <a href="https://www.linkedin.com/in/chaithanya-sujith-sinha-istharla-4a9860224/" target="_blank" rel="noopener noreferrer">Chaitanya Istarla</a></span></li>
          <li><FaGithub /><span>GitHub: <a href="https://github.com/Chaithanyaistharla" target="_blank" rel="noopener noreferrer">Chaithanyaistharla</a></span></li>
          <li><FaPhone /><span>Phone: +1 (940) 594-6594</span></li>
          <li><FaMapMarkerAlt /><span>Location: Denton, TX 76201</span></li>
        </ul>
      </div>
    </section>
  );
}