import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBriefcase, FaEnvelope, FaBell, FaUser } from 'react-icons/fa';
import { GiTakeMyMoney } from "react-icons/gi";
import { LuMessageSquare } from "react-icons/lu";
import { BsBell } from "react-icons/bs";
import Atlassian from "../assets/atlassian-logo.jpg";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [messageNotification, setMessageNotification] = useState(true); // Example state for message notification
  const [bellNotification, setBellNotification] = useState(true); // Example state for bell notification

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="top-header">
        <div className="logo">
          Logo
        </div>
        <div className="nav-toggle" onClick={handleMenuToggle}>
          <span className="nav-toggle-icon"></span>
        </div>
        <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item active">
              <FaBriefcase className="nav-icon" />
              <span>Jobs</span>
            </li>
            <li className="nav-item">
              <div className="icon-container">
                <LuMessageSquare className="nav-icon" />
                {messageNotification && <span className="notification-badge"></span>}
              </div>
              <span>Messages</span>
            </li>
            <li className="nav-item">
              <GiTakeMyMoney className="nav-icon" />
              <span>Payments</span>
            </li>
          </ul>
          <div className="user-section">
  <div className="icon-container">
    <BsBell className="nav-icon bell" />
    {bellNotification && <span className="notification-badge"></span>}
  </div>
  <img src={Atlassian} className="nav-icon profile-image" />
  <span className="dropdown-icon" onClick={handleDropdownToggle}>⌵</span>
</div>
        </nav>
      </div>
      {/* Sub-navbar */}
      <nav className="sub-navbar">
        <ul className="sub-nav-list">
          <li className="sub-nav-item activee">
            <span>Job Preview</span>
          </li>
          <li className="sub-nav-item">
            <span>Applicants</span>
          </li>
          <li className="sub-nav-item">
            <span>Match</span>
          </li>
          <li className="sub-nav-item">
            <span>Messages</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
