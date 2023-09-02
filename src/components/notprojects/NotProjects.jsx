import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Box, Button, Center } from "@chakra-ui/react";

const App2 = () => {
  return (
    <Center flexDirection="column">
      <Box>
        <h1>Outlet se reemplaza por el componente del link (router)</h1>
        <Button>
          <Link to="/react-projects">Back</Link>
        </Button>
        <Button>
          <Link to="/react-projects/countries">FSO</Link>
        </Button>
        <Button>
          <Link to="/react-projects/ds/game">Memory Card Game</Link>
        </Button>
        <Button>
          <Link to="/react-projects/ds/weather">Weather App</Link>
        </Button>
        <Button>
          <Link to="clock">Clock</Link>
        </Button>
        <Button>
          <Link to="classinput">ClassInput</Link>
        </Button>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Outlet />
      </Box>
    </Center>
  );
};

export default App2;
