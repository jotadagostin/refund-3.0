import { tv } from "tailwind-variants";
import { NavLink as RouterNavLink } from "react-router-dom";

const navLink = tv({
  base: ["text-sm", "transition-colors", "duration-200"],
  variants: {
    active: {
      true: "text-[var(--green-100)] font-semibold",
      false: "text-[var(--gray-200)] hover:text-[var(--green-100)] font-medium",
    },
  },
});

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <RouterNavLink to={to} end>
      {({ isActive }) => (
        <span className={navLink({ active: isActive })}>{children}</span>
      )}
    </RouterNavLink>
  );
}
