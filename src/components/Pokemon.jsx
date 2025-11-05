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
    return <div className="loading">Loading Pokémon's details...</div>;
  }

  return (
    <div className="pokemon">
      <p>{fullDetails}</p>
      <img
        src={fullDetails.sprites.front_default}
        alt={fullDetails.name}
        className="pokemon-image"
      />
      <p>{fullDetails.name}</p>
      <p>{fullDetails.types[0]?.type.name}</p>
      <p>{fullDetails.height}</p>
      <p>{fullDetails.weight}</p>
    </div>
  );
};

export default Pokemon;
