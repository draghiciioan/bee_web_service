import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import DropdownContainer from "./DropdownContainer";

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest('[data-dropdown="login-menu"]') && !target.closest('#login-modal')) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative" data-dropdown="login-menu">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 via-primary to-cyan-200 text-black font-bold rounded-md shadow-lg hover:scale-105 hover:shadow-cyan-400/40 hover:from-primary hover:to-cyan-400 transition-all duration-200 border-2 border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 animate-glow-neon"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <Lock size={20} className="animate-pulse" />
        <span className="tracking-widest">Autentificare</span>
      </button>
      {open && (
        <DropdownContainer className="border-yellow-400/40" width="w-56">
          <div className="px-3 py-2 text-sm">Formularul de autentificare va fi disponibil în curând.</div>
        </DropdownContainer>
      )}
    </div>
  );
};

export default LoginDropdown;
