import React from "react";
import "./App.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, themes, AppBar, Toolbar, TextField, Hourglass } from "react95";

import Menu from "./components/Menu";

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
          </Toolbar>
        </AppBar>
        <header className="App-header">
          Hello everybody . Welcome to pokemon 95
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
