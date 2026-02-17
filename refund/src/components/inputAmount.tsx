import React from "react";
import { Input } from "./input";

type InputAmountProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value"
> & {
  label: string;
  value?: number; // valor real (ex: 10.5)
  error?: string;
};

export const InputAmount = React.forwardRef<HTMLInputElement, InputAmountProps>(
  ({ label, value, onChange, ...props }, ref) => {
    const [displayValue, setDisplayValue] = React.useState("");

    // Formata número para moeda
    function formatCurrency(value: number) {
      return new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    }

    // Quando receber value externo
    React.useEffect(() => {
      if (typeof value === "number") {
        setDisplayValue(formatCurrency(value));
      }
    }, [value]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      const raw = e.target.value.replace(/\D/g, "");

      const numericValue = Number(raw) / 100;

      setDisplayValue(formatCurrency(numericValue));

      // Chama o onChange padrão do input HTML (compatível com react-hook-form)
      onChange?.(e);
    }

    return (
      <Input
        ref={ref}
        label={label}
        value={displayValue}
        onChange={handleChange}
        inputMode="numeric"
        placeholder="0,00"
        {...props}
      />
    );
  },
);

InputAmount.displayName = "InputAmount";
