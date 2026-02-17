import { tv, type VariantProps } from "tailwind-variants";
import type { ButtonHTMLAttributes } from "react";
import FileUploadIcon from "../assets/icons/fileUpload.svg?react";

const buttonSearchVariants = tv({
  base: [
    "flex items-center justify-center rounded transition cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-200)] focus-visible:ring-offset-2",
  ],

  variants: {
    variant: {
      primary:
        "bg-[var(--green-100)] hover:bg-[var(--green-200)] text-white fill-white",
    },

    size: {
      md: "w-[48px] h-[48px]",
      sm: "w-10 h-10",
    },

    disabled: {
      true: "bg-[var(--green-100)] cursor-not-allowed opacity-40",
    },
  },

  compoundVariants: [
    {
      disabled: true,
      variant: "primary",
    },
  ],

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonSearchVariants = VariantProps<typeof buttonSearchVariants>;

interface ButtonSearchProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonSearchVariants {
  "arial-label"?: string;
  error?: string;
}

export function FileUploadButton({
  variant,
  size,
  disabled,
  className,
  error,
  ...props
}: ButtonSearchProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={buttonSearchVariants({
        variant,
        size,
        disabled,
        className,
      })}
      {...props}
    >
      <FileUploadIcon />
    </button>
  );
}
