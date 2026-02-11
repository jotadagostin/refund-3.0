import React from "react";
import { tv } from "tailwind-variants";

/**
 * Styles com variantes state e size
 */
const inputStyles = tv({
  slots: {
    container: "flex flex-col gap-2 w-full",
    label: "font-medium uppercase tracking-wide transition-colors",
    input: "w-full rounded-md border bg-white outline-none transition-colors",
  },

  variants: {
    state: {
      default: {
        label: "text-gray-500",
        input: "border-gray-300 text-gray-800 placeholder:text-gray-400",
      },
      active: {
        label: "text-emerald-600",
        input: "border-emerald-600 text-gray-800 placeholder:text-gray-400",
      },
    },

    size: {
      sm: {
        input: "px-3 py-2 text-xs h-8",
        label: "text-[10px]",
      },
      md: {
        input: "px-4 py-3 text-sm h-10",
        label: "text-xs",
      },
      lg: {
        input: "px-5 py-4 text-base h-12",
        label: "text-sm",
      },
    },
  },

  defaultVariants: {
    state: "default",
    size: "md",
  },
});

/**
 * Tipos
 */
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  size?: "sm" | "md" | "lg"; // Tipagem explícita
};

/**
 * Componente Input
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label = "md", className, onFocus, onBlur, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const state = isFocused ? "active" : "default";

    const {
      container,
      label: labelStyle,
      input,
    } = inputStyles({
      state,
    });

    return (
      <div className={container()}>
        <label className={labelStyle()}>{label}</label>

        <input
          ref={ref}
          className={`${input()} ${className ?? ""}`} // ✅ seguro
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
