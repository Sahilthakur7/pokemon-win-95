import React from "react";
import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, AppBar, Toolbar, TextField, Hourglass } from "react95";

import Menu from "./components/Menu";
import PokemonList from "./components/PokemonList";
import SearchBox from "./components/SearchBox";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <ThemeProvider theme={themes.default}>
        <AppBar>
          <Toolbar>
            <Menu />
            <SearchBox />
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <PokemonList />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
