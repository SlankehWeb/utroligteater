import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/components/auth/auth";

// Create a rroot for rendering React elemnets
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the main application within a strict mode
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
