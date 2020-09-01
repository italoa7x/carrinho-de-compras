import React from 'react';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Common from "./components/common";
import Home from "./components/home";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#00b0ff'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
     <Common />
     <Home />
    </MuiThemeProvider>
  );
}

export default App;
