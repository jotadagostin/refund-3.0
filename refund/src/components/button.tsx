import type { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "w-full",
    "flex items-center justify-center cursor-pointer transition rounded group gap-1",
  ],

  variants: {
    variant: {
      primary:
        "bg-[var(--green-100)] hover:bg-[var(--green-200)] disabled:opacity-50 disabled:cursor-not-allowed text-white",
    },

    size: {
      sm: "h-10 px-4 text-sm",
      md: "h-12 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {}

export default function Button({
  children,
  variant,
  size,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
