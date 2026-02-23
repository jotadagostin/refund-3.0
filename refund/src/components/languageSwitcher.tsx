import { useLanguage } from "../hooks/useLanguage";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const isEn = language === "en";
  const isPt = language === "pt";

  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-1 border border-[var(--gray-300)] rounded-lg overflow-hidden bg-[var(--gray-500)] shadow-lg">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-4 py-2 text-sm font-semibold transition-colors ${
          isEn
            ? "bg-[var(--green-100)] text-[var(--white)]"
            : "text-[var(--gray-100)] hover:bg-[var(--gray-300)]"
        }`}
        title="English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`px-4 py-2 text-sm font-semibold transition-colors ${
          isPt
            ? "bg-[var(--green-100)] text-[var(--white)]"
            : "text-[var(--gray-100)] hover:bg-[var(--gray-300)]"
        }`}
        title="Português"
      >
        PT
      </button>
    </div>
  );
}
