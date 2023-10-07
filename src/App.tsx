import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['primary'];
    purple: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    blue?: PaletteOptions['primary'];
    purple?: Palette['primary'];
    white?: Palette['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    blue: true;
    purple: true;
    white: true;
  }
}

function App() {
  let theme = createTheme();

   theme = createTheme(theme, {
    palette: {
      blue: theme.palette.augmentColor({
        color: { main: '#5B9CC2' },
        name: 'blue',
      }),
      purple: theme.palette.augmentColor({
        color: { main: '#6D4B98' },
        name: 'purple',
      }),
      white: theme.palette.augmentColor({
        color: { main: '#FFFFFF' },
        name: 'white',
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="consultas" element={<Header />} />
            <Route path="planos" element={<Header />} />
            <Route path="exames" element={<Header />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
