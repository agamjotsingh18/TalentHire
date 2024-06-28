import React from 'react';
import './JobPreview.css'; // Import CSS file
import Header from './Header';
import JobDetails from './JobDetails';
import SkillsRequired from './SkillsRequired';
import Benefits from './Benefits';
import CompanyDetails from './CompanyDetails';
import SideComponent from './SideComponent';

const JobPreview = () => {
  return (
    <div className="job-preview">
      <Header />
      <div className="job-content">
        <div className="main-content">
          <JobDetails />
          <SkillsRequired />
          <Benefits />
          <CompanyDetails />
        </div>
        <div className="side-content">
          <SideComponent /> {/* Add the SideComponent here */}
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
