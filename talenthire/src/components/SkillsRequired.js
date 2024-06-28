// src/components/SkillsRequired.js
import React from 'react';
import './SkillsRequired.css';
import figma from "../assets/figma.png"
import illustrator from "../assets/illustrator.png"
import xd from "../assets/xd.png"

const SkillsRequired = () => {
  return (
    <div className="skills-required">
      <div className="skills-row">
        <div className="skills-column">
          <h3>Skills Required</h3>
          <ul className="skills-list">
            <li><img src={figma} alt="Figma" /> Figma</li>
            <li><img src={illustrator} alt="Adobe Illustrator" /> Adobe Illustrator</li>
            <li><img src={xd} alt="Adobe XD" /> Adobe XD</li>
          </ul>
        </div>
        <div className="skills-column">
          <h3>Preferred Language</h3>
          <p>English</p>
        </div>
        <div className="skills-column">
          <h3>Type</h3>
          <p>Full time</p>
        </div>
        <div className="skills-column">
          <h3>Years of Experience</h3>
          <p>3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsRequired;