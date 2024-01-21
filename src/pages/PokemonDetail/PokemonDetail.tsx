import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetail.css";

export const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemonInfo, setPokemonInfo] = useState<any>();

  const getPokeData = useCallback(async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    return data;
  }, [id]);

  const setPokemonDetails = async () => {
    const pokemonData = await getPokeData().catch((err: any) =>
      console.log(err)
    );
    setPokemonInfo(pokemonData);
    console.log(pokemonData);
  };

  useEffect(() => {
    setPokemonDetails();
  }, []);

  return (
    <div className="component">
      <a href="/">Revenir en arrière</a>
      <h1>Pokémon n°{pokemonInfo?.order}</h1>
      <h2>{pokemonInfo?.name}</h2>
      <img alt="Sprite du pokemon" src={pokemonInfo?.sprites?.front_default} />
      <h3>
        Types :{" "}
        {pokemonInfo?.types.map((type: any, index: number) => (
          <span key={index}>{type.type.name} </span>
        ))}
      </h3>
    </div>
  );
};
