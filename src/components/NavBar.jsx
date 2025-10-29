import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h2>Pokédex</h2>
        <span className="subtitle">Dashboard</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item active">
          <span className="nav-icon">📊</span> Overview
        </li>
        <li className="nav-item">
          <span className="nav-icon">🔎</span> Search
        </li>
        <li className="nav-item">
          <span className="nav-icon">ℹ️</span> About
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
