import React, { useRef, useEffect } from "react";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in" id="login-modal">
      <div
        ref={modalRef}
        className="relative w-full max-w-sm bg-base-100/80 border border-primary/40 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-float glassmorphism"
      >
        <button
          className="absolute top-3 right-3 text-primary hover:text-error transition text-xl font-bold"
          onClick={onClose}
          aria-label="Închide"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Autentificare</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full bg-base-200/80"
            required
          />
          <input
            type="password"
            placeholder="Parolă"
            className="input input-bordered input-primary w-full bg-base-200/80"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full font-semibold shadow-lg hover:scale-105 transition-all"
          >
            Intră în cont
          </button>
        </form>
        <div className="text-center text-sm text-base-content/70">
          Nu ai cont? <span className="text-primary cursor-pointer hover:underline">Înregistrează-te</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 