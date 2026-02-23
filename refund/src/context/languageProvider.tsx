import { useCallback, useSyncExternalStore } from "react";
import i18n from "../i18n";
import { LanguageContext, type Language } from "./languageContext";

const LANG_STORAGE_KEY = "i18nextLng";

function getSnapshot() {
  return i18n.language ?? "en";
}

function getServerSnapshot() {
  return "en";
}

function subscribe(callback: () => void) {
  i18n.on("languageChanged", callback);
  return () => i18n.off("languageChanged", callback);
}

function normalize(lng: string | undefined): Language {
  if (lng && lng.startsWith("pt")) return "pt";
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const current: Language = normalize(language);

  const setLanguage = useCallback((lng: Language) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lng);
    } catch {
      // ignore
    }
    i18n.changeLanguage(lng);
  }, []);

  return (
    <LanguageContext.Provider value={{ language: current, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
