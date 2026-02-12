// select.styles.ts
import { useState } from "react";
import { tv } from "tailwind-variants";

const selectTrigger = tv({
  base: [
    "w-full",
    "h-12",
    "px-4",
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
    "mt-2",
    "w-full",
    "rounded-lg",
    "border",
    "border-zinc-200",
    "bg-white",
    "shadow-lg",
    "py-2",
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

export function Select() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="w-72">
      <label
        className={`block text-xs font-medium mb-2 ${
          open ? "text-(--green-100) font-bold" : "text-(--gray-200)"
        }`}
      >
        CATEGORY
      </label>

      <button
        onClick={() => setOpen(!open)}
        className={selectTrigger({
          state: open ? "active" : "default",
          hasValue: !!value,
        })}
      >
        {value ?? "Selecione"}
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className={selectContent()}>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setValue(option);
                setOpen(false);
              }}
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
