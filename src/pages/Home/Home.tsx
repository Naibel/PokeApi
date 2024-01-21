import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import styles from "./Home.module.css";
import { create } from "zustand";

interface Pokemon {
  name: string;
  url: string;
}

export type State = {
  pokemons: Pokemon[];
  addPokemons: (data: Pokemon[]) => void;
};

const usePokemonStore = create<State>((set) => ({
  pokemons: [],
  addPokemons: (data: Pokemon[]) => set(() => ({ pokemons: data })),
}));

export const Home = () => {
  const { pokemons, addPokemons } = usePokemonStore();
  const [searchBar, setSearchBar] = useState<string>("");

  const getPokeData = useCallback(async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    const data = await response.json();
    addPokemons(data.results);
  }, [addPokemons]);

  useEffect(() => {
    getPokeData();
  }, [getPokeData]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Pokedex</h1>
        <div>
          <span>Recherche : </span>
          <input
            type="text"
            value={searchBar}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setSearchBar(event.target.value);
            }}
          />
        </div>
      </header>
      <div className={styles.cards}>
        {pokemons
          ?.filter((pokemon: Pokemon) => pokemon?.name.includes(searchBar))
          .map((pokemon: Pokemon) => (
            <Card
              key={`card_${pokemons.indexOf(pokemon)}`}
              name={pokemon.name}
              index={pokemons.indexOf(pokemon)}
            />
          ))}
      </div>
    </div>
  );
};
