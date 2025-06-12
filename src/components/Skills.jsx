import React from 'react';

const skillCategories = {
  'Programming & Web': ['Python','Java','C','JavaScript','HTML','CSS','ReactJS','Django','Node.js'],
  Databases: ['SQL','MongoDB','MySQL'],
  'UI/UX & Design': ['Figma','Wireframing','Prototyping','Userflows','Sitemapping'],
  Tools: ['Git','Firebase','REST APIs','Data Structures & Algorithms']
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills</h2>
        {Object.entries(skillCategories).map(([cat, list]) => (
          <div key={cat} className="skill-category">
            <h4>{cat}</h4>
            <p>{list.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}