import { createContext } from "react";

export type Language = "en" | "pt";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lng: Language) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
