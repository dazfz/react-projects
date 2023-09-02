import { useState, useEffect } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import axios from "axios";
import CountryDetails from "./Details";
import CountryList from "./List";

const Countries = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (value) {
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((allResponse) => {
          const matchingCountries = allResponse.data.filter((c) =>
            c.name.common.toLowerCase().includes(value.toLowerCase())
          );

          if (matchingCountries.length === 1) {
            axios
              .get(
                `https://studies.cs.helsinki.fi/restcountries/api/name/${matchingCountries[0].name.common}`
              )
              .then((response) => {
                setCountry(response.data);
                setCountries([]);
              })
              .catch(() => {
                setCountry(null);
                setCountries(matchingCountries);
              });
          } else {
            setCountry(null);
            setCountries(matchingCountries);
          }
        })
        .catch(() => {
          setCountry(null);
          setCountries([]);
        });
    } else {
      setCountry(null);
      setCountries([]);
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    setCountry(null);
    setCountries([]);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <form>
        <FormControl>
          <FormLabel htmlFor="country-input">Countries:</FormLabel>
          <Input
            id="country-input"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Enter a country"
          />
          <FormHelperText>Enter a country name above.</FormHelperText>
        </FormControl>
      </form>

      <CountryDetails country={country} />
      <CountryList countries={countries} onCountryClick={setCountry} />
    </Box>
  );
};

export default Countries;
