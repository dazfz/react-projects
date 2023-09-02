/* eslint-disable react/prop-types */
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

const CountryDetails = ({ country }) => {
  if (!country) return null;

  return (
    <Box>
      <Heading as="h2" size="xl">
        {country.name.common}
      </Heading>
      <Text>
        <strong>Capital:</strong> {country.capital}
      </Text>
      <Text>
        <strong>Area:</strong> {country.area} sq km
      </Text>
      <Heading as="h3" size="md" mt={4}>
        Languages:
      </Heading>
      <UnorderedList>
        {Object.entries(country.languages).map(
          ([languageCode, languageName]) => (
            <ListItem key={languageCode}>{languageName}</ListItem>
          )
        )}
      </UnorderedList>
      <Image
        src={country.flags.png}
        alt={country.flags.alt}
        mt={4}
        maxW="100%"
      />
    </Box>
  );
};

export default CountryDetails;
