import { useEffect, useState } from "react";
import DropdownContainer from "./DropdownContainer";
import MenuItem from "./MenuItem";

const themeOptions = [
  { value: "beeFuturistLight", label: "Futurist Light", icon: "🌞" },
  { value: "beeFuturistDark", label: "Futurist Dark", icon: "🌚" },
  { value: "beeCyberpunk", label: "Cyberpunk", icon: "🦾" },
  { value: "beeEmerald", label: "Emerald", icon: "💚" },
  { value: "beeNeoTokyo", label: "Neo Tokyo", icon: "🏙️" },
  { value: "beePlasma", label: "Plasma", icon: "⚡" },
  { value: "beeChromeGrid", label: "Chrome Grid", icon: "🔳" },
];

const ThemeDropdown = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "beeFuturistLight");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest('[data-dropdown="theme-menu"]')) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative" data-dropdown="theme-menu">
      <button
        className="flex items-center gap-2 px-3 py-1.5 bg-base-200/80 border border-cyan-400/40 rounded-md text-cyan-400 font-mono font-semibold shadow hover:bg-cyan-400/10 hover:text-cyan-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className="text-lg">🎨</span>
        <span className="hidden sm:inline">{themeOptions.find((t) => t.value === theme)?.label || theme}</span>
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && (
        <DropdownContainer className="border-yellow-400/40" width="w-56">
          {themeOptions.map((t, idx) => (
            <div key={t.value}>
              <MenuItem
                onClick={() => {
                  setTheme(t.value);
                  setOpen(false);
                }}
                icon={<span className="text-xl">{t.icon}</span>}
                label={t.label}
                className={`w-full ${theme === t.value ? "bg-yellow-100/60 text-yellow-700 scale-105" : "hover:bg-yellow-100/40 hover:text-yellow-700 text-base-content"}`}
              >
                {theme === t.value && <span className="ml-auto text-yellow-500 font-bold">✔</span>}
              </MenuItem>
              {idx < themeOptions.length - 1 && <div className="mx-4 border-b border-yellow-400/10 my-1" />}
            </div>
          ))}
        </DropdownContainer>
      )}
    </div>
  );
};

export default ThemeDropdown;
