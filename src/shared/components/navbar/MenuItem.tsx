import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface MenuItemProps {
  icon?: ReactNode;
  label: ReactNode;
  subLabel?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const MenuItem = ({ icon, label, subLabel, to, onClick, className = "", children }: MenuItemProps) => {
  const content = (
    <>
      {icon}
      {label}
      {subLabel && (
        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs">{subLabel}</span>
      )}
      {children}
    </>
  );

  const baseClass =
    "flex items-center gap-2 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-base shadow-sm group " +
    className;

  return to ? (
    <Link to={to} onClick={onClick} className={baseClass}>
      {content}
    </Link>
  ) : (
    <div onClick={onClick} className={baseClass}>
      {content}
    </div>
  );
};

export default MenuItem;
