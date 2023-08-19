import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Game from "./components/memory/Game";
import WeatherApp from "./components/weather/Weather";
import Clock from "./components/Clock";
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
      >
        <WeatherApp />
      </Box>
      <Clock/>
    </Center>
  );
};

export default App;
