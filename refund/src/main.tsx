import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { RefundProvider } from "./context/refundProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RefundProvider>
        <App />
      </RefundProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
