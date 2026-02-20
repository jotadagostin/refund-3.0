import { tv } from "tailwind-variants";
import { Link, NavLink as RouterNavLink } from "react-router-dom";

const navLink = tv({
  base: [" text-sm ", "transition-colors", "duration-200", "whitespace-nowrap"],
  variants: {
    active: {
      true: "text-[var(--green-100)] font-semibold",
      false: "text-[var(--gray-200)] hover:text-[var(--green-100)] font-medium",
    },
  },
});

// type NavLinkProps = {
//   to: string;
//   children: React.ReactNode;
// };

type NavLinkProps = React.ComponentProps<typeof Link>;

export function NavLink({
  to,
  children,
  onClick,
}: NavLinkProps & { onClick?: (e: React.MouseEvent) => void }) {
  return (
    <RouterNavLink to={to} end onClick={onClick}>
      {({ isActive }) => (
        <span className={navLink({ active: isActive })}>{children}</span>
      )}
    </RouterNavLink>
  );
}
