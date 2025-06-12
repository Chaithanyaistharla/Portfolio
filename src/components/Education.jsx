import React from 'react';

const education = [
  {
    degree: 'Master of Science in Information Science',
    school: 'University of North Texas',
    period: '2024 – Present'
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Vasireddy Venkatadri Institute of Technology',
    period: '2020 – 2024'
  }
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="education-item">
            <h3>{edu.degree}</h3>
            <span>{edu.school} | {edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
}