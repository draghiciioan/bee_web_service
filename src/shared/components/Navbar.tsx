import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserCircle, LogOut, Settings, UserPlus, Lock } from "lucide-react";
import beeLogo from "../../assets/logo-bee.webp"; // Poți schimba cu logo-ul tău

const themeOptions = [
  { value: "beeFuturistLight", label: "Futurist Light", icon: "🌞" },
  { value: "beeFuturistDark", label: "Futurist Dark", icon: "🌚" },
  { value: "beeCyberpunk", label: "Cyberpunk", icon: "🦾" },
  { value: "beeEmerald", label: "Emerald", icon: "💚" },
  { value: "beeNeoTokyo", label: "Neo Tokyo", icon: "🏙️" },
  { value: "beePlasma", label: "Plasma", icon: "⚡" },
  { value: "beeChromeGrid", label: "Chrome Grid", icon: "🔳" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "beeFuturistLight");
  const [menuOpen, setMenuOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest('[data-dropdown="user-menu"]')) {
        setMenuOpen(false);
      }
      if (signupOpen && !target.closest('[data-dropdown="signup-menu"]')) {
        setSignupOpen(false);
      }
      if (loginOpen && !target.closest('[data-dropdown="login-menu"]') && !target.closest('#login-modal')) {
        setLoginOpen(false);
      }
      if (themeDropdownOpen && !target.closest('[data-dropdown="theme-menu"]')) {
        setThemeDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, signupOpen, loginOpen, themeDropdownOpen]);

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
        {/* Sign In Button */}
        <div className="relative" data-dropdown="login-menu">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 via-primary to-cyan-200 text-black font-bold rounded-md shadow-lg hover:scale-105 hover:shadow-cyan-400/40 hover:from-primary hover:to-cyan-400 transition-all duration-200 border-2 border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 animate-glow-neon"
            onClick={() => setLoginOpen(true)}
          >
            <Lock size={20} className="animate-pulse" />
            <span className="tracking-widest">Autentificare</span>
          </button>
        </div>
        {/* Signup Dropdown */}
        <div className="relative" data-dropdown="signup-menu">
          <button 
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 via-primary to-cyan-200 text-black font-bold rounded-md shadow-lg hover:scale-105 hover:shadow-cyan-400/40 hover:from-primary hover:to-cyan-400 transition-all duration-200 border-2 border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 animate-glow-neon"
            onClick={() => setSignupOpen(!signupOpen)}
          >
            <UserPlus size={20} className="animate-pulse" />
            <span className="tracking-widest">Înregistrare</span>
          </button>
          {signupOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-base-100/95 border border-yellow-400/40 rounded-2xl shadow-2xl z-50 py-3 px-2 animate-in fade-in duration-200 backdrop-blur-xl flex flex-col gap-1">
              <div className="text-xs font-bold text-yellow-600/80 px-3 py-1 uppercase tracking-widest flex items-center gap-2">
                <UserPlus size={16} className="text-yellow-400" /> Alege un rol:
              </div>
              <Link
                to="/register/client"
                onClick={() => setSignupOpen(false)}
                className="flex items-center gap-2 hover:bg-yellow-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-yellow-700 text-base shadow-sm group"
              >
                <span className="text-lg">👤</span> Client
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-yellow-500">Cont personal</span>
              </Link>
              <Link
                to="/register/partner"
                onClick={() => setSignupOpen(false)}
                className="flex items-center gap-2 hover:bg-yellow-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-yellow-700 text-base shadow-sm group"
              >
                <span className="text-lg">🤝</span> Partener
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-yellow-500">Business</span>
              </Link>
              <Link
                to="/register/collaborator"
                onClick={() => setSignupOpen(false)}
                className="flex items-center gap-2 hover:bg-yellow-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-yellow-700 text-base shadow-sm group"
              >
                <span className="text-lg">🧑‍💼</span> Colaborator
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-yellow-500">Freelancer</span>
              </Link>
              <Link
                to="/register/courier"
                onClick={() => setSignupOpen(false)}
                className="flex items-center gap-2 hover:bg-yellow-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-yellow-700 text-base shadow-sm group"
              >
                <span className="text-lg">🚚</span> Curier
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-yellow-500">Livrări</span>
              </Link>
            </div>
          )}
        </div>
        {/* Dropdown teme */}
        <div className="relative" data-dropdown="theme-menu">
          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-base-200/80 border border-cyan-400/40 rounded-md text-cyan-400 font-mono font-semibold shadow hover:bg-cyan-400/10 hover:text-cyan-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            onClick={() => setThemeDropdownOpen((v) => !v)}
            type="button"
          >
            <span className="text-lg">🎨</span>
            <span className="hidden sm:inline">{themeOptions.find(t => t.value === theme)?.label || theme}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {themeDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-base-100/95 border border-yellow-400/40 rounded-2xl shadow-2xl z-50 py-3 px-2 animate-in fade-in duration-200 backdrop-blur-xl flex flex-col gap-1">
              {themeOptions.map((t, idx) => (
                <div key={t.value}>
                  <button
                    className={`flex items-center w-full gap-3 px-4 py-2 text-left font-semibold text-base transition-all duration-150 rounded-xl shadow-sm group ${theme === t.value ? 'bg-yellow-100/60 text-yellow-700 scale-105' : 'hover:bg-yellow-100/40 hover:text-yellow-700 text-base-content'}`}
                    style={{ color: theme === t.value ? '#bfa100' : undefined }}
                    onClick={() => { setTheme(t.value); setThemeDropdownOpen(false); }}
                  >
                    <span className="text-xl">{t.icon}</span>
                    <span>{t.label}</span>
                    {theme === t.value && <span className="ml-auto text-yellow-500 font-bold">✔</span>}
                  </button>
                  {idx < themeOptions.length - 1 && <div className="mx-4 border-b border-yellow-400/10 my-1" />}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Avatar + dropdown */}
        <div className="relative" data-dropdown="user-menu">
          <div
            className="w-10 h-10 bg-cyan-400/80 text-black rounded-md flex items-center justify-center cursor-pointer hover:scale-110 transition shadow-[0_0_16px_cyan] border-2 border-cyan-400/60 animate-glow-neon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <UserCircle size={26} className="animate-pulse" />
          </div>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-base-100/95 border border-cyan-400/40 rounded-2xl shadow-2xl z-50 py-3 px-2 animate-in fade-in duration-200 backdrop-blur-xl flex flex-col gap-1">
              <div className="flex items-center gap-2 hover:bg-cyan-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-cyan-700 text-base shadow-sm group">
                <UserCircle size={18} className="text-cyan-400" /> Profil
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-cyan-500">Vezi profilul</span>
              </div>
              <div className="flex items-center gap-2 hover:bg-cyan-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-cyan-700 text-base shadow-sm group">
                <Settings size={18} className="text-cyan-400" /> Setări
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-cyan-500">Preferințe</span>
              </div>
              <div className="border-b border-cyan-400/10 my-1 mx-2" />
              <div className="flex items-center gap-2 hover:bg-red-100/60 hover:scale-105 transition-all px-3 py-2 rounded-xl cursor-pointer font-semibold text-red-700 text-base shadow-sm group">
                <LogOut size={18} className="text-red-400" /> Delogare
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-xs text-red-500">Ieșire cont</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
