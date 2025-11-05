import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Charts = ({ data, loading }) => {
  const [activeChart, setActiveChart] = useState("types");

  const typeColors = {
    fire: "#ff6b6b",
    water: "#4ecdc4",
    grass: "#95e1d3",
    electric: "#fce38a",
    psychic: "#f8b500",
    ice: "#74b9ff",
    dragon: "#6c5ce7",
    fairy: "#fd79a8",
    fighting: "#e84393",
    poison: "#a29bfe",
    ground: "#fdcb6e",
    flying: "#81ecec",
    bug: "#00b894",
    rock: "#636e72",
    ghost: "#2d3436",
    steel: "#b2bec3",
    dark: "#2d3436",
    normal: "#ddd",
  };

  // Function to process type distribution data
  const getTypeDistribution = () => {
    if (!data || data.length === 0) return [];

    const typeCounts = {};

    // Count each type
    data.forEach((pokemon) => {
      pokemon.types?.forEach((typeObj) => {
        const typeName = typeObj.type.name;
        typeCounts[typeName] = (typeCounts[typeName] || 0) + 1;
      });
    });

    // Convert to array format for charts 
    return Object.entries(typeCounts)
      .map(([type, count]) => ({
        name: type,
        value: count,
        percentage: ((count / data.length) * 100).toFixed(1),
        fill: typeColors[type] || "#95a5a6", // Add color here
      }))
      .sort((a, b) => b.value - a.value); // Sort by count
  };

  // Function to get average stats by type
  const getStatsData = () => {
    if (!data || data.length === 0) return [];

    const typeStats = {};

    // Collect stats for each type
    data.forEach((pokemon) => {
      const primaryType = pokemon.types?.[0]?.type.name;
      if (!primaryType) return;

      if (!typeStats[primaryType]) {
        typeStats[primaryType] = {
          type: primaryType,
          heightTotal: 0,
          weightTotal: 0,
          count: 0,
        };
      }

      typeStats[primaryType].heightTotal += pokemon.height;
      typeStats[primaryType].weightTotal += pokemon.weight;
      typeStats[primaryType].count += 1;
    });

    // Calculate averages
    return Object.values(typeStats)
      .map((stat) => ({
        type: stat.type,
        avgHeight: +(stat.heightTotal / stat.count / 10).toFixed(1), // meters
        avgWeight: +(stat.weightTotal / stat.count / 10).toFixed(1), // kg
        count: stat.count,
      }))
      .filter((stat) => stat.count >= 2) // Only types with 2+ Pokemon
      .sort((a, b) => b.count - a.count);
  };

  // Custom tooltip for pie chart
  const PieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="chart-tooltip">
          <p className="tooltip-label">{`${
            data.name.charAt(0).toUpperCase() + data.name.slice(1)
          } Type`}</p>
          <p className="tooltip-value">{`Count: ${data.value}`}</p>
          <p className="tooltip-percentage">{`${data.percentage}% of total`}</p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for bar chart
  const BarTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="tooltip-label">{`${label.charAt(0).toUpperCase() + label.slice(1)} Type`}</p>
          <p className="tooltip-value">{`Avg Height: ${payload[0].value}m`}</p>
          <p className="tooltip-value">{`Avg Weight: ${payload[1].value}kg`}</p>
          <p className="tooltip-count">{`Sample Size: ${payload[0].payload.count} Pokémon`}</p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="charts-container">
        <div className="charts-loading">Loading chart data...</div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="charts-container">
        <div className="charts-empty">No data available for visualization</div>
      </div>
    );
  }

  const typeData = getTypeDistribution();
  const statsData = getStatsData();

  return (
    <div className="charts-container">
      <div className="chart-header">
        <h3> Data Visualizations</h3>
        <p>Explore Pokémon data through interactive charts</p>
      </div>

      {/* Change chart on display */}
      <div className="chart-controls">
        <button 
          className={`chart-toggle ${activeChart === "types" ? "active" : ""}`}
          onClick={() => setActiveChart("types")}
        >
          Type Distribution
        </button>
        <button 
          className={`chart-toggle ${activeChart === "stats" ? "active" : ""}`}
          onClick={() => setActiveChart("stats")}
        >
          Size by Pokemon Type
        </button>
      </div>

      {/* Chart Content */}
      <div className="chart-wrapper">
        {activeChart === "types" ? (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={typeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {typeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<PieTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={statsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
              <XAxis 
                dataKey="type" 
                stroke="#ecf0f1"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#ecf0f1"
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<BarTooltip />} />
              <Legend />
              <Bar dataKey="avgHeight" fill="#3498db" name="Avg Height (m)" />
              <Bar dataKey="avgWeight" fill="#e74c3c" name="Avg Weight (kg)" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="chart-insight">
        {activeChart === "types" ? (
          <p>
            💡 <strong>Insight:</strong> This chart shows which Pokémon types are
            most common in your current view. Try using filters to see how the
            distribution changes!
          </p>
        ) : (
          <p>
            💡 <strong>Insight:</strong> Compare average size across Pokémon types. 
            Ground and Rock types tend to be heavier, while Flying types are typically lighter. 
            Use filters to explore specific combinations!
          </p>
        )}
      </div>
    </div>
  );
};

export default Charts;
