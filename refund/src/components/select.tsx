// select.styles.ts
import { useState } from "react";
import { tv } from "tailwind-variants";

const selectTrigger = tv({
  base: [
    "flex",
    "items-center",
    "justify-between",
    "rounded-lg",
    "border",
    "text-sm",
    "transition-colors",
    "duration-200",
    "bg-white",
  ],
  variants: {
    size: {
      default: "w-full h-12 px-4",
      sm: "h-10 text-sm",
      md: "w-[262px] h-10 px-4",
      lg: "h-14 text-base",
    },
    state: {
      default: "border-[var(--gray-300)] text-zinc-500",
      active: "border-[var(--green-100)] ring-emerald-600",
    },
    hasValue: {
      true: "text-zinc-900",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

const selectContent = tv({
  base: [
    "absolute",
    "top-full",
    "left-0",
    "mt-2",
    "w-full",
    "rounded-lg",
    "border",
    "border-zinc-200",
    "bg-white",
    "shadow-lg",
    "py-2",
    "z-50",
  ],
});

const selectItem = tv({
  base: [
    "px-4",
    "py-2",
    "text-sm",
    "cursor-pointer",
    "flex",
    "items-center",
    "justify-between",
    "hover:bg-zinc-100",
  ],
  variants: {
    selected: {
      true: "font-medium text-zinc-900 font-bold",
    },
  },
});

const options = [
  "Food",
  "Accommodation",
  "Transportation",
  "Services",
  "Other",
];

// interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   error?: string;
// }

interface SelectProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onClick"
> {
  error?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Select({
  error,
  onClick,
  name,
  onChange,
  ...props
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setValue(option);
    setOpen(false);

    // Dispara onChange para react-hook-form
    if (onChange) {
      const event = {
        target: { value: option, name },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(!open);
    onClick?.(e);
  };

  return (
    <div className="w-72 relative">
      <label
        className={`block text-xs font-medium mb-2 ${
          error
            ? "text-red-600"
            : open
              ? "text-(--green-100) font-bold"
              : "text-(--gray-200)"
        }`}
      >
        CATEGORY
      </label>

      {/* Input oculto para react-hook-form */}
      <input type="hidden" name={name} value={value || ""} {...props} />

      <button
        type="button"
        onClick={handleClick}
        className={selectTrigger({
          size: "md",
          state: error ? "default" : open ? "active" : "default",
          hasValue: !!value,
        })}
      >
        {value ?? "Selecione"}
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {error && <span className="text-red-500 text-xs mt-1">{error}</span>}

      {open && (
        <div className={selectContent()}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelectOption(option)}
              className={selectItem({
                selected: value === option,
              })}
            >
              {option}
              {value === option && <span>✔</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
