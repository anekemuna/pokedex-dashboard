import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h2>Pokédex</h2>
        <span className="subtitle">Dashboard</span>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
         <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span className="nav-icon">📊</span> Overview
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span className="nav-icon">🔎</span> Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <span className="nav-icon">ℹ️</span> About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
