import React from "react";
import { Link } from "react-router-dom";

export const Nav: React.FC = () => {
  return (
    <nav>
      <h2><Link to="/">ADITHYA BHARADWAJ C</Link></h2>
      <div className="nav_container">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to ="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


