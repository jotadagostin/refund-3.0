import { useLanguage } from "./useLanguage";

export function useCurrency() {
  const { language } = useLanguage();

  const formatCurrency = (value: number): string => {
    if (language === "en") {
      return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const getCurrencySymbol = (): string => {
    return language === "en" ? "$" : "R$";
  };

  return { formatCurrency, getCurrencySymbol };
}
