import { Flex, Text, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface SearchBarProps {
  searchResult: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchResult, onSearchChange }: SearchBarProps) => (
  <Flex bg="red.100" p="1rem" justifyContent="center">
    <Flex width="60%" gap=".5rem" alignItems="center">
      <Text>Recherche:</Text>
      <Input
        bg="white"
        placeholder="Rechercher un Pokémon"
        type="text"
        value={searchResult}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onSearchChange(event.target.value);
        }}
      />
    </Flex>
  </Flex>
);

export default SearchBar;
