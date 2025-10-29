import React from "react";

const Card = ({ title, value, loading }) => {
  return (
    <div className="card">
      <div className="card-container">
        <p>{title}</p>
        <h3>{loading ? 'Loading...' : value}</h3>
      </div>
    </div>
  );
};

export default Card;
