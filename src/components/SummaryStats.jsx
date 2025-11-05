import React from "react";
import Card from "./Card";

const SummaryStats = ({ loading, data }) => {
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
      <div className="summary-stats">
        <div className="stats-container">
        <Card title={"No. Pokemons"} value={stats.totalCount} loading={loading}/>
        <Card title={"Avg Height"} value={`${stats.avgHeight} dm`} loading={loading}/>
        <Card title={"Avg Weight"} value={`${stats.avgWeight} hg`} loading={loading}/>
        </div>
      </div>
    </>
  );
};

export default SummaryStats;
