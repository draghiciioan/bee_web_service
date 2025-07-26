import type { ReactNode } from "react";

interface DropdownContainerProps {
  children: ReactNode;
  width?: string;
  className?: string;
}

const DropdownContainer = ({ children, width = "w-60", className = "" }: DropdownContainerProps) => (
  <div
    className={`absolute right-0 mt-2 ${width} bg-base-100/95 border rounded-2xl shadow-2xl z-50 py-3 px-2 animate-in fade-in duration-200 backdrop-blur-xl flex flex-col gap-1 ${className}`}
  >
    {children}
  </div>
);

export default DropdownContainer;
