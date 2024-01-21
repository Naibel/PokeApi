import { useCallback, useEffect, useState } from "react";
import { create } from "zustand";

import { PokeCard } from "../../components/Card/PokeCard";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "./Home.module.css";
import { Flex, Grid, Heading } from "@chakra-ui/react";

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
  const [searchResult, setSearchResult] = useState<string>("");

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
      <Header />
      <SearchBar
        searchResult={searchResult}
        onSearchChange={(value: string) => setSearchResult(value)}
      />
      <Flex direction="column" p="1rem">
        <Heading textAlign="center">Liste des pokémons</Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="6"
          p="2rem"
        >
          {pokemons
            ?.filter((pokemon: Pokemon) => pokemon?.name.includes(searchResult))
            .map((pokemon: Pokemon) => (
              <PokeCard
                key={`card_${pokemons.indexOf(pokemon)}`}
                name={pokemon.name}
                index={pokemons.indexOf(pokemon)}
              />
            ))}
        </Grid>
      </Flex>
    </div>
  );
};
