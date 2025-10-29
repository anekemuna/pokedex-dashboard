import React from "react";
import Card from "./Card";

const Header = ({ loading, data }) => {
  // calculate summary stats
  const calculateStats = () => {
    if (!data || data.length === 0) {
      return {
        totalCount: 0,
        avgHeight: 0,
        avgWeight: 0,
      };
    }

    const totalCount = data.length;

    // Calculate average height
    const totalHeight = data.reduce((sum, pokemon) => sum + pokemon.height, 0);
    const avgHeight = (totalHeight / totalCount).toFixed(1);

    // Calculate average weight
    const totalWeight = data.reduce((sum, pokemon) => sum + pokemon.weight, 0);
    const avgWeight = (totalWeight / totalCount).toFixed(1);

    return {
      totalCount,
      avgHeight,
      avgWeight,
    };
  };

  const stats = calculateStats();

  return (
    <>
      <div className="header">
        <h1>Pokédex Dashboard</h1>
        <h3>
          <em>Displays a list of Pokémons with their key details.</em>
        </h3>
        <em>
          Data sourced from the PokéAPI:
          <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            Here
          </a>
        </em>
        <div className="stats-container">
        <Card title={"No. Pokemons"} value={loading ? 'Loading...' : stats.totalCount} />
        <Card title={"Avg Height"} value={loading ? 'Loading...' : `${stats.avgHeight} dm`} />
        <Card title={"Avg Weight"} value={loading ? 'Loading...' :  `${stats.avgWeight} hg`} />
        </div>
      </div>
    </>
  );
};

export default Header;
