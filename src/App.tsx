"use client";

import { useRoutes } from "react-router-dom";
import "./App.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { Suspense, useEffect } from "react";
import routes from "~react-pages";
import { Header } from "./components/header/Header";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
    purple: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
    purple?: Palette["primary"];
    white?: Palette["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
    purple: true;
    white: true;
  }
}

function App() {
  let theme = createTheme({ palette: { mode: "dark" } });

  theme = createTheme(theme, {
    palette: {
      blue: theme.palette.augmentColor({
        color: { main: "#5B9CC2" },
        name: "blue",
      }),
      purple: theme.palette.augmentColor({
        color: { main: "#6D4B98" },
        name: "purple",
      }),
      white: theme.palette.augmentColor({
        color: { main: "#FFFFFF" },
        name: "white",
      }),
    },
  });

  useEffect(() => {
    AOS.init();
  }, []);

  console.log(routes);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Suspense>
        {useRoutes(routes)}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
