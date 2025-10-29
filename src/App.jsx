import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const API = "https://pokeapi.co/api/v2/pokemon?limit=150";

      const response = await fetch(API);
      const json = await response.json();
      setList(json.results);
    };
    fetchPokemon().catch(console.error);
  }, []);

  return (
    <div className="app">
      <Header />
      <aside>
        <NavBar />
      </aside>
      <Card />
      <List data={list} />
    </div>
  );
}

export default App;
