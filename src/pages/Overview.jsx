import { useState, useEffect } from "react";
import SummaryStats from "../components/SummaryStats";
import Filter from "../components/Filter";
import List from "../components/List";

const Overview = () => {
  const [list, setList] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const [filters, setFilters] = useState({
    type: "",
    heightRange: [0, 50],
    weightRange: [0, 1000],
  });

  // Fetches data
  useEffect(() => {
    const fetchPokemon = async () => {
      const API = "https://pokeapi.co/api/v2/pokemon?limit=30";

      const response = await fetch(API);
      const json = await response.json(); // {name, url}

      // because url is not a good feature,...
      // ... uses the url to actually fetch the pokemon's data
      const jsonDetails = await Promise.all(
        json.results.map(async (p) => {
          const res = await fetch(p.url);
          return await res.json();
        })
      );

      setList(jsonDetails);
      setLoading(false);
    };
    fetchPokemon().catch(console.error);
  }, []);

  // searches data by name or type
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    //? Moved logic into applyFilters() in second useEffec()
    // if (searchValue !== "") {
    //   const filteredPokemon = list.filter(
    //     (pokemon) =>
    //       pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    //   );
    //   setFilteredResult(filteredPokemon);
    // } else {
    //   setFilteredResult(list);
    // }
  };

  // clears search field
  const handleClearButton = () => {
    setSearchInput("");
  };

  const updateFilters = (filterType, value) => {
    if (filterType === "clear") {
      // clear all filters
      setFilters({
        type: "",
        heightRange: [0, 50],
        weightRange: [0, 1000],
      });
    } else {
      // Handle filter update
      const newFilters = {
        ...filters,
        [filterType]: value,
      };
      setFilters(newFilters);
    }
  };

  // get pokemon types
  const pokemonTypes = [
    ...new Set(
      list.flatMap((pokemon) => pokemon.types?.map((t) => t.type.name) || [])
    ),
  ].sort();

  useEffect(() => {
    // applies filters
    const applyFilters = () => {
      let result = list;

      // Apply search first
      if (searchInput) {
        result = result.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
        );
      }

      // Apply type filter
      if (filters.type) {
        result = result.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === filters.type)
        );
      }

      // Apply height range filter
      result = result.filter(
        (pokemon) =>
          pokemon.height >= filters.heightRange[0] &&
          pokemon.height <= filters.heightRange[1]
      );

      // Apply weight range filter
      result = result.filter(
        (pokemon) =>
          pokemon.weight >= filters.weightRange[0] &&
          pokemon.weight <= filters.weightRange[1]
      );

      setFilteredResult(result);
    };
    if (list.length > 0) {
      applyFilters();
    }
  }, [list, searchInput, filters]); // updates when list, searchInput, and filters change

  // check if filters have been applied
  const hasActiveFilters =
    filters.type ||
    filters.heightRange[0] > 0 ||
    filters.heightRange[1] < 50 ||
    filters.weightRange[0] > 0 ||
    filters.weightRange[1] < 1000;

  return (
    <div className="overview">
        <SummaryStats
          loading={loading}
          data={searchInput.length > 0 ? filteredResult : list}
        />
        {/* search logic/ui */}
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔎</span>
            <input
              type="text"
              placeholder="Search Pokémon by name..."
              value={searchInput}
              onChange={(inputString) => searchItems(inputString.target.value)}
              className="search-input"
            />
            {searchInput && (
              <button onClick={handleClearButton} className="clear-button">
                ✕
              </button>
            )}
          </div>
        </div>
        <Filter
          filters={filters}
          updateFilters={updateFilters}
          pokemonTypes={pokemonTypes}
        />
        <List
          loading={loading}
          data={searchInput || hasActiveFilters ? filteredResult : list}
          hasSearchQuery={searchInput.length > 0}
          searchQuery={searchInput}
        />
    </div>
  );
}

export default Overview;

