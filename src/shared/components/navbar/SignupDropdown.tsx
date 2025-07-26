import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import DropdownContainer from "./DropdownContainer";
import MenuItem from "./MenuItem";

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
          <MenuItem
            to="/register/client"
            onClick={() => setOpen(false)}
            icon={<span className="text-lg">👤</span>}
            label="Client"
            subLabel="Cont personal"
            className="text-yellow-700 hover:bg-yellow-100/60"
          />
          <MenuItem
            to="/register/partner"
            onClick={() => setOpen(false)}
            icon={<span className="text-lg">🤝</span>}
            label="Partener"
            subLabel="Business"
            className="text-yellow-700 hover:bg-yellow-100/60"
          />
          <MenuItem
            to="/register/collaborator"
            onClick={() => setOpen(false)}
            icon={<span className="text-lg">🧑‍💼</span>}
            label="Colaborator"
            subLabel="Freelancer"
            className="text-yellow-700 hover:bg-yellow-100/60"
          />
          <MenuItem
            to="/register/courier"
            onClick={() => setOpen(false)}
            icon={<span className="text-lg">🚚</span>}
            label="Curier"
            subLabel="Livrări"
            className="text-yellow-700 hover:bg-yellow-100/60"
          />
        </DropdownContainer>
      )}
    </div>
  );
};

export default SignupDropdown;
