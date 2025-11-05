import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Pokemon = () => {
  const { id } = useParams();
  const [fullDetails, setFullDetails] = useState(null);

  useEffect(() => {
    const getPokemonDetail = async () => {
      try {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        const details = await fetch(URL);
        const json = await details.json();

        setFullDetails(json);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };
    getPokemonDetail().catch(console.error);
  }, [id]);

  if (!fullDetails) {
    return <div className="pokemon-loading">Loading Pokémon's details...</div>;
  }

  return (
    <div className="pokemon">
        
      <div className="pokemon-card">
        {/* Header */}
        <div className="pokemon-header">
          <div className="pokemon-id">
            #{fullDetails.id.toString().padStart(3, "0")}
          </div>
          <h1 className="pokemon-name">{fullDetails.name}</h1>
          <div className="pokemon-types">
            {fullDetails.types.map((type, index) => (
              <span key={index} className={`type-badge type-${type.type.name}`}>
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="pokemon-images">
          <div className="main-image">
            <img
              src={
                fullDetails.sprites.other?.["official-artwork"]
                  ?.front_default || fullDetails.sprites.front_default
              }
              alt={fullDetails.name}
              className="pokemon-artwork"
            />
          </div>
          <div className="sprite-gallery">
            <img src={fullDetails.sprites.front_default} alt="Front" />
            <img src={fullDetails.sprites.back_default} alt="Back" />
            {fullDetails.sprites.front_shiny && (
              <img src={fullDetails.sprites.front_shiny} alt="Shiny" />
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="pokemon-info-grid">
          {/* Basic Info */}
          <div className="info-section">
            <h3>Basic Info</h3>
            <div className="info-item">
              <span className="info-label">Height:</span>
              {/* It's easier to understand m instead of dm */}
              <span className="info-value">
                {(fullDetails.height / 10).toFixed(1)} m
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Weight:</span>
              {/* Making it kg for better understanding */}
              <span className="info-value">
                {(fullDetails.weight / 10).toFixed(1)} kg
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Base Experience:</span>
              <span className="info-value">{fullDetails.base_experience}</span>
            </div>
          </div>

          {/* Abilities */}
          <div className="info-section">
            <h3>Abilities</h3>
            {fullDetails.abilities.map((ability, index) => (
              <div key={index} className="ability-item">
                <span className="ability-name">{ability.ability.name}</span>
                {ability.is_hidden && (
                  <span className="hidden-ability">(Hidden)</span>
                )}
              </div>
            ))}
          </div>

          {/* Base Stats */}
          <div className="info-section stats-section">
            <h3>Base Stats</h3>
            {fullDetails.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-name">{stat.stat.name}:</span>
                <div className="stat-bar-container">
                  <div
                    className="stat-bar"
                    style={{ width: `${Math.min(stat.base_stat / 2, 100)}%` }}
                  ></div>
                  <span className="stat-value">{stat.base_stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
