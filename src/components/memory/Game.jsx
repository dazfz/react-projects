import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Scoreboard from "./Scoreboard";
import {
  AddIcon,
  WarningIcon,
  InfoIcon,
  QuestionIcon,
  CheckIcon,
  CloseIcon,
  EditIcon,
  DeleteIcon,
  CopyIcon,
  AttachmentIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";

const Game = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([
    { id: 1, icon: <AddIcon boxSize={10} />, clicked: false },
    { id: 2, icon: <WarningIcon boxSize={10} />, clicked: false },
    { id: 3, icon: <InfoIcon boxSize={10} />, clicked: false },
    { id: 4, icon: <QuestionIcon boxSize={10} />, clicked: false },
    { id: 5, icon: <CheckIcon boxSize={10} />, clicked: false },
    { id: 6, icon: <CloseIcon boxSize={10} />, clicked: false },
    { id: 7, icon: <EditIcon boxSize={10} />, clicked: false },
    { id: 8, icon: <DeleteIcon boxSize={10} />, clicked: false },
    { id: 9, icon: <CopyIcon boxSize={10} />, clicked: false },
    { id: 10, icon: <AttachmentIcon boxSize={10} />, clicked: false },
    { id: 11, icon: <ArrowForwardIcon boxSize={10} />, clicked: false },
    { id: 12, icon: <ArrowBackIcon boxSize={10} />, clicked: false },
  ]);

  const shuffleCards = () => setCards(cards.sort(() => Math.random() - 0.5));

  const handleCardClick = (clickedCard) => {
    shuffleCards();
    if (clickedCard.clicked) {
      setScore(0);
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, clicked: false }))
      );
    } else {
      setScore((prevScore) => prevScore + 1);
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === clickedCard.id ? { ...card, clicked: true } : card
        )
      );
    }
    setBestScore((prevBestScore) =>
      score > prevBestScore ? score : prevBestScore
    );
    if (score === cards.length) alert("¡Win!");
  };

  useEffect(() => shuffleCards(), []);

  return (
    <Box>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        flexDirection="column"
        border="1px solid"
        gap={4}
      >
        <Heading as="h2" size="lg">
          Memory Card Game
        </Heading>
        <Flex flexWrap="wrap" justifyContent="center" gap={4} padding={2}>
          {cards.map((card) => (
            <Button
            color="pink.500"
              key={card.id}
              size="lg"
              height="100px"
              width="100px"
              onClick={() => handleCardClick(card)}
            >
              {card.icon}
            </Button>
          ))}
        </Flex>
        <Flex alignItems="center">
          <Scoreboard score={score} bestScore={bestScore} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Game;
