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
        <h2 className="job-title">Senior Product Designer</h2>
        <span className="posted-time">posted 2 days ago</span>
        <span className="status">Open</span>
      </div>
      <div className="job-info">
        <span className="location">
          <CiLocationOn />
          Delaware, USA
        </span>
        <span className="salary">
          <GrMoney />
          $300k-$400k
        </span>
      </div>
    </div>
  );
};

export default JobDetails;