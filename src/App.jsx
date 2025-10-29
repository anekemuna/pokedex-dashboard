import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const API = "https://pokeapi.co/api/v2/pokemon?limit=20";

      const response = await fetch(API);
      const json = await response.json();

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

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredPokemon = list.filter(
        (pokemon) =>
          pokemon.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          pokemon.types.some((type) =>
            type.type.name.toLowerCase().includes(searchValue.toLowerCase())
          )
      );
      setFilteredResult(filteredPokemon);
    } else {
      setFilteredResult(list);
    }
  };

  const handleClearButton = () => {
    setSearchInput("");
  };

  return (
    <div className="app">
      <NavBar />
      <div className="app-body">
        <Header loading={loading} data={searchInput.length > 0 ? filteredResult : list} />
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
            <button 
              onClick={handleClearButton}
              className="clear-button"
            >
              ✕
            </button>
          )}
          </div>
        </div>
        <List loading={loading} data={searchInput.length > 0 ? filteredResult : list} />
      </div>
    </div>
  );
}

export default App;
