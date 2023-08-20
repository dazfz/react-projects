import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "gray.900",
        color: "cyan.300",
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "cyan",
        variant: "outline",
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);
