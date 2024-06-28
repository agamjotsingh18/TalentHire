// src/components/SideComponent.js

import React from 'react';
import './SideComponent.css'; // Import CSS file for styling
import { FaTrashAlt, FaEdit, FaUsers, FaHeart, FaEnvelope, FaEye, FaPencilAlt } from 'react-icons/fa';

const SideComponent = () => {
  return (
    <div className="side-component">
      <div className="job-actions">
        <button className="delete-job">
          <FaTrashAlt className="icon" />
          Delete job
        </button>
        <button className="edit-job">
          <FaPencilAlt className="icon" color='white'/>
          Edit job
        </button>
      </div>
      <div className="job-stats">
        <div className="stat-item">
          <FaUsers className="icon" />
          <span className="stat-label">Applicants</span>
          <span className="stat-value">400</span>
        </div>
        <div className="stat-item">
          <FaHeart className="icon" />
          <span className="stat-label">Matches</span>
          <span className="stat-value">100</span>
        </div>
        <div className="stat-item">
          <FaEnvelope className="icon" />
          <span className="stat-label">Messages</span>
          <span className="stat-value">147</span>
        </div>
        <div className="stat-item">
          <FaEye className="icon" />
          <span className="stat-label">Views</span>
          <span className="stat-value">800</span>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
