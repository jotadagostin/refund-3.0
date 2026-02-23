import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { RefundProvider } from "./context/refundProvider.tsx";
import { LanguageProvider } from "./context/languageProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <LanguageProvider>
        <HashRouter>
          <RefundProvider>
            <App />
          </RefundProvider>
        </HashRouter>
      </LanguageProvider>
    </Suspense>
  </React.StrictMode>,
);
