import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-body">
        <h1> About Pokédex Dashboard</h1>

        <section className="about-section">
          <h2>What is this?</h2>
          <p>
            An interactive dashboard for exploring Pokémon data, featuring 
            comprehensive search, filtering, and visualization tools. Perfect 
            for trainers, fans, and data enthusiasts who want to dive deep 
            into the world of Pokémon statistics.
          </p>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Search:</strong> Find Pokémon by name</li>
            <li><strong>Smart Filtering:</strong> Filter by type, height, and weight ranges</li>
            <li><strong>Data Visualizations:</strong> Interactive charts and graphs</li>
            <li><strong>View Details:</strong> Share specific Pokémon details</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Data Source</h2>
          <p>
            All Pokémon data is sourced from the excellent{" "}
            <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
              PokéAPI
            </a>
            , a free and open RESTful API serving comprehensive Pokémon data.
            The API provides detailed information on Pokémon species, abilities,
            types, stats, and much more.
          </p>
        </section>

        <section className="about-section">
          <h2>Built With</h2>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Vite</span>
            <span className="tech-tag">React Router</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
