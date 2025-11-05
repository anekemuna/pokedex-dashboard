import { Link } from "react-router";

const List = ({ loading, data, hasSearchQuery, searchQuery }) => {
  // handles loading state
  if (loading) {
    return <div className="list">Loading Pokemon...</div>;
  }

  // handles no data at all
  if (!data) {
    return <div className="list">No Pokemon data available.</div>;
  }

  // handle empty search results
  if (hasSearchQuery && data.length === 0) {
    return (
      <div className="list">
        <h2>Pokédex</h2>
        <div className="no-results">
          <p>No Pokémon found for "{searchQuery}"</p>
          <p>Try searching for a different name.</p>
        </div>
      </div>
    );
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
            <th>Details</th>
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
                <span className="pokemon-type">
                  {pokemon.types[0]?.type.name}
                </span>
              </td>
              <td>{pokemon.height}</td>
              <td>{pokemon.weight}</td>
              <td><Link to={`/pokemonDetails/${pokemon.id}`} key={pokemon.id}><button>View</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
