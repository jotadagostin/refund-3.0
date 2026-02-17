import React from "react";
import { tv } from "tailwind-variants";

const inputStyles = tv({
  slots: {
    container: "flex flex-col  w-full gap-2",
    label: "font-medium uppercase tracking-wide transition-colors",
    inputWrapper: "relative w-full",
    input: "w-full rounded-md border bg-white outline-none transition-colors ",
  },

  variants: {
    state: {
      default: {
        label: "text-[var(--gray-200)] ",
        input:
          "border-gray-300 text-[var(--green-100)] placeholder:text-gray-400 ",
      },
      active: {
        label: "text-[var(--green-100)] ",
        input: "border-emerald-600 text-gray-800 placeholder:text-gray-400",
      },
      error: {
        label: "text-red-600",
        input: "border-red-600 text-gray-800 placeholder:text-gray-400",
      },
    },

    size: {
      sm: {
        input: "px-3 py-2 text-xs h-8",
        label: "text-[10px]",
      },
      md: {
        input: "px-4 py-3 text-sm h-10 ",
        label: "text-xs",
      },
      lg: {
        input: "px-5 py-4 text-base  h-12",
        label: "text-sm",
      },
    },
  },

  defaultVariants: {
    state: "default",
    size: "md",
  },
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  inputSize?: "sm" | "md" | "lg";
  rightElement?: React.ReactNode;
  error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = "",
      inputSize = "md",
      className,
      rightElement,
      onFocus,
      onBlur,
      error,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const state = error ? "error" : isFocused ? "active" : "default";

    const {
      container,
      label: labelStyle,
      inputWrapper,
      input,
    } = inputStyles({
      state,
      size: inputSize,
    });

    return (
      <div className={container()}>
        <label className={labelStyle()}>{label}</label>

        <div className={inputWrapper()}>
          <input
            ref={ref}
            className={`${input()} ${rightElement ? "pr-10" : ""} ${className ?? ""}`}
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
          {rightElement && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              {rightElement}
            </div>
          )}

          {error && (
            <span className="text-red-500 text-xs absolute mt-1 block">
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
