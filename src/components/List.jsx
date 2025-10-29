import React from "react";

const List = ({ loading, data }) => {
    if(loading || !data || data.length === 0) {
        return <div className="list">Loading Pokemon...</div>;
    }
  return (

      <div className="list">
       {data.map((pokemon) => (
        <div key={pokemon.id} className="pokemon">
        {/* <span>{pokemon.id}</span> */}
        <span>{pokemon.name}</span>
        <span>{pokemon.height}</span>
        <span>{pokemon.weight}</span>
       </div>))}
      </div>

  );
};

export default List;
