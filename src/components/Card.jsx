import React from "react";

const Card = ({ title, value, loading }) => {
  return (
    <div className="card">
      <div className="card-container">
        <p className="card-title">{title}</p>
        <h3 className="card-value">{loading ? 'Loading...' : value}</h3>
      </div>
    </div>
  );
};

export default Card;
