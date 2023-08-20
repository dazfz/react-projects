import React from "react";
import { Link } from "react-router-dom";
import { Box, Center } from "@chakra-ui/react";
import Game from "./components/memory/Game";
import WeatherApp from "./components/weather/Weather";

const App = () => {
  return (
    <Center>
      <Box
        color="pink.500"
        w="30%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Game />
      </Box>
      <Box
        w="30%"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <WeatherApp />
        <Link to="notprojects">Not projects</Link>
      </Box>
    </Center>
  );
};

export default App;
