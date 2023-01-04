import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple, red, yellow } from "@mui/material/colors";

const theme1 = createTheme({
  palette: {
    primary: purple,
    secondary: yellow,
  },
});

const theme2 = createTheme({
  palette: {
    primary: red,
    secondary: yellow,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme2}>
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
