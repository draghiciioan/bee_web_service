import beeLogo from "../../assets/logo-bee.webp"; // Poți schimba cu logo-ul tău
import LoginDropdown from "./navbar/LoginDropdown";
import SignupDropdown from "./navbar/SignupDropdown";
import ThemeDropdown from "./navbar/ThemeDropdown";
import UserMenu from "./navbar/UserMenu";

const Navbar = () => {

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-[99vw] max-w-full px-4 py-2 bg-base-100/10 backdrop-blur-2xl border border-cyan-400/40 shadow-[0_0_32px_4px_rgba(0,255,255,0.12)] hover:shadow-[0_0_64px_8px_rgba(0,255,255,0.22)] rounded-xl md:rounded-2xl flex justify-between items-center transition-all duration-500 hover:bg-base-100/20 animate-float before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-tr before:from-cyan-400/10 before:to-primary/5 before:blur-2xl before:scale-105 after:absolute after:inset-0 after:-z-20 after:bg-cyan-400/5 after:blur-3xl after:scale-110 border-t-4 border-b-4 border-x-2 border-cyan-400/30 font-['Share_Tech_Mono','monospace']">
      {/* LOGO + Nume */}
      <div className="flex items-center gap-4 text-cyan-400 font-extrabold text-2xl tracking-widest select-none">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-primary to-cyan-200 border-2 border-cyan-400/60 shadow-[0_0_16px_2px_rgba(0,255,255,0.25)] flex items-center justify-center overflow-hidden animate-pulse">
          <img src={beeLogo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>
<span 
  className="font-['Baloo_2','Fredoka','Quicksand','Poppins','sans-serif'] text-3xl md:text-4xl font-extrabold tracking-widest select-none flex gap-1 items-center"
  style={{ letterSpacing: '0.18em' }}
>
  <span
    style={{
      color: '#FFD700',
      textShadow: '0 2px 6px #bfa10099, 0 1px 0 #fff',
      fontWeight: 800,
    }}
  >
    Bee
  </span>
  <span
    style={{
      color: '#22d3ee',
      textShadow: '0 2px 6px #0e749099, 0 1px 0 #fff',
      fontWeight: 800,
    }}
  >
    Conect
  </span>
</span>

      </div>
      {/* Separator vizual */}
      <div className="hidden md:block h-10 w-0.5 bg-cyan-400/30 mx-6 animate-pulse"></div>
      {/* Meniu Dreapta */}
      <div className="flex items-center gap-8 text-base-content">
        {/* Linkuri */}
        <ul className="flex gap-6 font-semibold text-cyan-200 uppercase tracking-wide text-base">
          <li className="hover:text-cyan-400 hover:scale-110 transition-all duration-150 cursor-pointer border-b-2 border-transparent hover:border-cyan-400">Acasă</li>
          <li className="hover:text-cyan-400 hover:scale-110 transition-all duration-150 cursor-pointer border-b-2 border-transparent hover:border-cyan-400">Despre</li>
          <li className="hover:text-cyan-400 hover:scale-110 transition-all duration-150 cursor-pointer border-b-2 border-transparent hover:border-cyan-400">Contact</li>
        </ul>
        {/* Separator vizual */}
        <div className="h-8 w-0.5 bg-cyan-400/20 mx-2 hidden md:block"></div>
        <LoginDropdown />
        <SignupDropdown />
        <ThemeDropdown />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
