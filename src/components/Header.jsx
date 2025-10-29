import React from "react";
import Card from "./Card";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Pokédex Dashboard</h1>
        <h3><em>Displays a list of Pokémons with their key details.</em></h3>
        <em>Data sourced from the PokéAPI: <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">Here</a></em>
        <Card title={'Total Pokemon'} value={150} />
        <Card title={'Stat 2'} value={150} />
        <Card title={'Stat 3'} value={150} />
      </div>
    </>
  );
};

export default Header;
