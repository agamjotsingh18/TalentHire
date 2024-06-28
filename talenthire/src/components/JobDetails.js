// src/components/JobDetails.js
import React from 'react';
import { TbDatabaseDollar } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";


import './JobDetails.css';

const JobDetails = () => {
  return (
    <div className="job-details">
      <div className="job-header">
        <h2 className="job-title">Junior Software Engineer</h2>
        <span className="posted-time">posted 2 days ago</span>
        <span className="status">Open</span>
      </div>
      <div className="job-info">
        <span className="location">
          <CiLocationOn />
          Noida, India
        </span>
        <span className="salary">
          <GrMoney />
          ₹4L - ₹5L /annum
        </span>
      </div>
    </div>
  );
};

export default JobDetails;