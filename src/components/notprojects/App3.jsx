import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Button, Center } from "@chakra-ui/react";
import Game from "../memory/Game";
import WeatherApp from "../weather/Weather";

const App3 = () => {
  const { name } = useParams();
  return (
    <Center flexDirection="column">
      <Box>
        <Button>
          <Link to="/react-projects/notprojects/">Back</Link>
        </Button>
        <Button>
          <Link to="error">Error</Link>
        </Button>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        {name === "game" ? (
          <Game />
        ) : name === "weather" ? (
          <WeatherApp />
        ) : (
          " "
        )}
      </Box>
    </Center>
  );
};

export default App3;
