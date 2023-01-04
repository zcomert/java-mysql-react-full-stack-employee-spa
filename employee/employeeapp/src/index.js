import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/AppContext";
import CustomThemeProvider from "./components/ui/theme/CustomThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <CustomThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
