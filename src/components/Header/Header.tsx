import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const Header = () => (
  <Flex
    bg="tomato"
    color="white"
    justifyContent="center"
    alignItems="center"
    width="100%"
    p="3rem"
  >
    <Flex direction="column" pl="2rem">
      <Heading as="h1" size="3xl" noOfLines={1}>
        Pokedex
      </Heading>
      <Text fontSize="xl">Attrapez-les tous !</Text>
    </Flex>
    <Flex direction="column" pl="2rem">
      <Image
        boxSize="250px"
        src="/Pokedex.png"
        alt="Pokedex"
        objectFit="cover"
      />
    </Flex>
  </Flex>
);

export default Header;
