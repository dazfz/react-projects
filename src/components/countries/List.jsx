/* eslint-disable react/prop-types */
import { Box, List, ListItem, Button } from "@chakra-ui/react";

const CountryList = ({ countries, onCountryClick }) => {
  if (countries.length === 0) return null;

  return (
    <List>
      {countries.map((country) => (
        <ListItem key={country.name.common}>
          <Box display="flex" gap="1rem" alignItems="center">
            {country.name.common}
            <Button onClick={() => onCountryClick(country)} size="sm">
              Show
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default CountryList;
