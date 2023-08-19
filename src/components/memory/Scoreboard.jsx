import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <Box>
      <Text>Score: {score}</Text>
      <Text>Best Score: {bestScore}</Text>
    </Box>
  );
};

export default Scoreboard;