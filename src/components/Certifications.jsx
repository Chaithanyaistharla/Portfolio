import React, { useState } from 'react';
import azureImg from '../assets/azure.jpg';
import salesforceImg from '../assets/salesforce.jpg';
import hackathonImg from '../assets/hackathon.jpg';

const certs = [
  { title: 'Azure AI Fundamentals – Microsoft', img: azureImg },
  { title: 'Salesforce Developer Virtual Internship – SmartBridge & SmartInternz', img: salesforceImg },
  { title: 'Smart India Hackathon 2022 Finalist', img: hackathonImg }
];

export default function Certifications() {
  const [openStates, setOpenStates] = useState(Array(certs.length).fill(false));

  const toggle = (i) => {
    setOpenStates(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="certifications">
      <div className="container">
        <h2>Certifications & Awards</h2>
        <ul>
          {certs.map((cert, i) => (
            <li key={i} className="certification-item">
              <button
                onClick={() => toggle(i)}
                className="certification-button"
              >
                {cert.title}
              </button>
              <div className={`certification-image ${openStates[i] ? 'open' : ''}`}>
                <img src={cert.img} alt={cert.title} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}