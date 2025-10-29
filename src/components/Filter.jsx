import React from "react";

const Filter = ({ filters, updateFilters, pokemonTypes }) => {
  const clearFilters = () => {
    updateFilters("clear", null);
  };

  return (
    <div className="filter">
      {/* Type Filter */}
      <div className="filter-group">
        <label>Type:</label>
        <select
          value={filters.type}
          onChange={(e) => updateFilters("type", e.target.value)}
        >
          <option value="">All Types</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Height Range */}
      <div className="filter-group">
        <label>
          Height: {filters.heightRange[0]} - {filters.heightRange[1]} dm
        </label>
        <div className="range-container">
          <input
            type="range"
            min="0"
            max="50"
            value={filters.heightRange[0]}
            onChange={(e) =>
              updateFilters("heightRange", [
                parseInt(e.target.value),
                filters.heightRange[1],
              ])
            }
          />
          <input
            type="range"
            min="0"
            max="50"
            value={filters.heightRange[1]}
            onChange={(e) =>
              updateFilters("heightRange", [
                filters.heightRange[0],
                parseInt(e.target.value),
              ])
            }
          />
        </div>
      </div>

      {/* Weight Range */}
      <div className="filter-group">
        <label>
          Weight: {filters.weightRange[0]} - {filters.weightRange[1]} hg
        </label>
        <div className="range-container">
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.weightRange[0]}
            onChange={(e) =>
              updateFilters("weightRange", [
                parseInt(e.target.value),
                filters.weightRange[1],
              ])
            }
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.weightRange[1]}
            onChange={(e) =>
              updateFilters("weightRange", [
                filters.weightRange[0],
                parseInt(e.target.value),
              ])
            }
          />
        </div>
      </div>

      {/* Clear Button */}
      <button onClick={clearFilters} className="clear-btn">
        Clear Filters
      </button>
    </div>
  );
};

export default Filter;
