import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>Pokédex Dashboard</h1>
      <h3>
        <em>Displays a list of Pokémons with their key details.</em>
      </h3>
      <em>
        Data sourced from the PokéAPI:
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          {" "}
          Here
        </a>
      </em>
    </div>
  );
};

export default About;
