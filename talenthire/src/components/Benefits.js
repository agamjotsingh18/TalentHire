// src/components/Benefits.js
import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section className="benefits">
      <h3>About the job</h3>
      <ol>
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>Work on creating graphics content and other graphic related works</li>
      </ol>
      <h4>Benefits:</h4>
      <ul>
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <h4>Schedule:</h4>
      <ul>
        <li>Day shift</li>
      </ul>
      <h4>Supplemental pay types:</h4>
      <ul>
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <h4>Work Location: <span>&emsp;In person</span></h4>
    </section>
  );
};

export default Benefits;