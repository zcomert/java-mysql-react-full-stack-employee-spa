import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./components/counter/Counter";
import { AppProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
