// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    name: 'Offline Fake Job Post Prediction',
    desc: 'Bi-directional LSTM model detecting fraudulent job postings with 97% accuracy.',
    tech: ['Python', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'Scikit-Learn', 'TensorFlow'],
    link: 'https://github.com/Chaithanyaistharla/Fake-Job-Post-Prediction.git'
  },
  {
    name: 'Smart Farming: Soil-Based Crop Prediction',
    desc: 'Data-driven insights for crop selection (95% accuracy).',
    tech: ['Data Analytics', 'Machine Learning'],
    link: 'https://github.com/Chaithanyaistharla/Smart-Farming-Soil-based-crop-prediction.git'
  },
  {
    name: 'One Nation – One Funding',
    desc: 'Platform connecting funding agencies and educational institutions.',
    tech: ['React.js', 'Node.js', 'MySQL'],
    link: 'https://github.com/Torjan-SIH/current'
  },
  {
    name: 'Balotsav Event Management',
    desc: 'Website managing event activities for VVIT.',
    tech: ['React.js', 'Firebase'],
    link: 'https://github.com/F4Homies/Balotsav.git'
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((p, i) => (
          <div key={i} className="project-item">
            <h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </h3>
            <p>{p.desc}</p>
            <p><strong>Tech:</strong> {p.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}