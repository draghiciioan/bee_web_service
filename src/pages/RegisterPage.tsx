import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const RegisterPage: React.FC = () => {
  const { register, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await register({ email, password, name });
      setSuccess(true);
    } catch (err: any) {
      setError('Înregistrare eșuată!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm bg-base-100/80 border border-primary/40 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-float glassmorphism">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Înregistrare</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nume"
            className="input input-bordered input-primary w-full bg-base-200/80"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full bg-base-200/80"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parolă"
            className="input input-bordered input-primary w-full bg-base-200/80"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="text-error text-sm text-center">{error}</div>}
          {success && <div className="text-success text-sm text-center">Cont creat cu succes! Te poți autentifica.</div>}
          <button
            type="submit"
            className="btn btn-primary w-full font-semibold shadow-lg hover:scale-105 transition-all"
            disabled={loading}
          >
            {loading ? 'Se înregistrează...' : 'Creează cont'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
