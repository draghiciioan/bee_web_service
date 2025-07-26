import { useEffect, useState } from "react";
import { UserCircle, LogOut, Settings } from "lucide-react";
import DropdownContainer from "./DropdownContainer";
import MenuItem from "./MenuItem";

const UserMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (open && !target.closest('[data-dropdown="user-menu"]')) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div className="relative" data-dropdown="user-menu">
      <div
        className="w-10 h-10 bg-cyan-400/80 text-black rounded-md flex items-center justify-center cursor-pointer hover:scale-110 transition shadow-[0_0_16px_cyan] border-2 border-cyan-400/60 animate-glow-neon"
        onClick={() => setOpen((v) => !v)}
      >
        <UserCircle size={26} className="animate-pulse" />
      </div>
      {open && (
        <DropdownContainer className="border-cyan-400/40" width="w-60">
          <MenuItem
            icon={<UserCircle size={18} className="text-cyan-400" />}
            label="Profil"
            subLabel="Vezi profilul"
            className="text-cyan-700 hover:bg-cyan-100/60"
          />
          <MenuItem
            icon={<Settings size={18} className="text-cyan-400" />}
            label="Setări"
            subLabel="Preferințe"
            className="text-cyan-700 hover:bg-cyan-100/60"
          />
          <div className="border-b border-cyan-400/10 my-1 mx-2" />
          <MenuItem
            icon={<LogOut size={18} className="text-red-400" />}
            label="Delogare"
            subLabel="Ieșire cont"
            className="text-red-700 hover:bg-red-100/60"
          />
        </DropdownContainer>
      )}
    </div>
  );
};

export default UserMenu;
