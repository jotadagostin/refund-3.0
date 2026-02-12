// nav-link.ts
import { tv } from "tailwind-variants";

const navLink = tv({
  base: [
    "text-sm",
    "font-medium",
    "transition-colors",
    "duration-200",
    "cursor-pointer",
  ],

  variants: {
    variant: {
      default: "text-[var(--gray-200)] hover:text-[var(--green-100)]",
      active: "text-[var(--green-100)] font-semibold",
    },
  },

  defaultVariants: {
    variant: "default",
  },
});

type NavLinkProps = {
  variant?: "default" | "active";
  children: React.ReactNode;
};

export function NavLink({ variant, children }: NavLinkProps) {
  return <a className={navLink({ variant })}>{children}</a>;
}
