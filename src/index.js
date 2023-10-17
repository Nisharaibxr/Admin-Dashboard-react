import React from "react";
import ReactDOM from "react-dom/client"; // <-- Updated this line
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside this container
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
