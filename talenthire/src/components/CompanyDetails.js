import React from 'react';
import './CompanyDetails.css';
import Atlassian from "../assets/atlassian-logo.jpg";

const CompanyDetails = () => {
  return (
    <section className="company-details">
      <div className='headerr'>
        <img src={Atlassian} alt="Atlassian logo" className="company-logo" />
        <h3>Atlassian</h3>
      </div>
      <div className='info-grid'>
        <div className='info-column'>
          <p><span>Company size</span>1k - 2k Employees</p>
          <p><span>Sector</span>Information Technology, Infrastructure</p>
          <p><span>Founded in</span>2019</p>
        </div>
        <div className='info-column'>
          <p><span>Type</span>Private</p>
          <p><span>Funding</span>Bootstrapped</p>
          <p><span>Founded By</span>Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetails;