import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPokemon = async () => {
      const API = "https://pokeapi.co/api/v2/pokemon?limit=10";

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

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <NavBar />
        <List loading={loading} data={list} />
      </div>
    </div>
  );
}

export default App;
