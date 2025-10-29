import React from "react";

const List = ({ data }) => {
    if(!data || data.length === 0) {
        return <div className="list">Loading Pokemon...</div>;
    }
  return (

      <div className="list">
       {data.map((pokemon) => (
        <div className="pokemon">
        <span>{pokemon.name}</span>
       </div>))}
      </div>

  );
};

export default List;
