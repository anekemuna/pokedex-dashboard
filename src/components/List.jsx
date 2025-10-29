import React from "react";

const List = ({ loading, data }) => {
    if(loading || !data || data.length === 0) {
        return <div className="list">Loading Pokemon...</div>;
    }
  
    return (
        <div className="list">
            <h2>Pokédex</h2>
            <table className="pokemon-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((pokemon) => (
                        <tr key={pokemon.id} className="pokemon-row">
                            <td>{pokemon.id}</td>
                            <td>
                                <img 
                                    src={pokemon.sprites.front_default} 
                                    alt={pokemon.name}
                                    className="pokemon-image"
                                />
                            </td>
                            <td className="pokemon-name">{pokemon.name}</td>
                            <td>
                                <span className="pokemon-type">{pokemon.types[0]?.type.name}</span>
                            </td>
                            <td>{pokemon.height}</td>
                            <td>{pokemon.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;
