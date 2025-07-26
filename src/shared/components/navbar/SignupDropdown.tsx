import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import DropdownContainer from "./DropdownContainer";

const SignupDropdown = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest('[data-dropdown="signup-menu"]')) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative" data-dropdown="signup-menu">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 via-primary to-cyan-200 text-black font-bold rounded-md shadow-lg hover:scale-105 hover:shadow-cyan-400/40 hover:from-primary hover:to-cyan-400 transition-all duration-200 border-2 border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 animate-glow-neon"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <UserPlus size={20} className="animate-pulse" />
        <span className="tracking-widest">Înregistrare</span>
      </button>
      {open && (
        <DropdownContainer className="border-yellow-400/40" width="w-60">
          <div className="text-xs font-bold text-yellow-600/80 px-3 py-1 uppercase tracking-widest flex items-center gap-2">
            <UserPlus size={16} className="text-yellow-400" /> Alege un rol:
          </div>
          <Link
            to="/register/client"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-base shadow-sm group text-yellow-700 hover:bg-yellow-100/60"
          >
            <span className="text-lg">👤</span>
            Client
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs">
              Cont personal
            </span>
          </Link>
          <Link
            to="/register/partner"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-base shadow-sm group text-yellow-700 hover:bg-yellow-100/60"
          >
            <span className="text-lg">🤝</span>
            Partener
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs">
              Business
            </span>
          </Link>
          <Link
            to="/register/collaborator"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-base shadow-sm group text-yellow-700 hover:bg-yellow-100/60"
          >
            <span className="text-lg">🧑‍💼</span>
            Colaborator
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs">
              Freelancer
            </span>
          </Link>
          <Link
            to="/register/courier"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-base shadow-sm group text-yellow-700 hover:bg-yellow-100/60"
          >
            <span className="text-lg">🚚</span>
            Curier
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs">
              Livrări
            </span>
          </Link>
        </DropdownContainer>
      )}
    </div>
  );
};

export default SignupDropdown;
