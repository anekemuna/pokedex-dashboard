import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>Nothing to See Here!</p>
      <div className="subtitle">The page you requested doesn't exist.</div>
      <Link to="/" className="home-btn">Go back home</Link>
    </div>
  );
};

export default NotFound;
