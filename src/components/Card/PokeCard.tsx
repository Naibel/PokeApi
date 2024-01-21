import { Button, Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface PokeCardProps {
  name: string;
  index: number;
}

const formatText = (input: string) => {
  const words = input.split("_");
  const formattedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).replace(/_/g, "");
    return firstLetter + restOfWord;
  });
  return formattedWords.join(" ");
};

export const PokeCard = ({ name, index }: PokeCardProps) => (
  <Card>
    <CardBody>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>{formatText(name)}</Text>
        <a href={`/pokemon/${index + 1}`}>
          <Button>Voir sa fiche</Button>
        </a>
      </Flex>
    </CardBody>
  </Card>
);
