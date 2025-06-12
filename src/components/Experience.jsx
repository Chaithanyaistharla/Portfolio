import React from 'react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'iQ Tree Tech Soft',
    period: 'Oct 2023 – Apr 2024',
    details: [
      'Developed Django-based ChatBot integrated with company website.',
      'Built HRMS web application using Django.'
    ],
  },
  // add more if needed
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="experience-item">
            <h3>{exp.role} @ {exp.company}</h3>
            <span>{exp.period}</span>
            <ul>
              {exp.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}