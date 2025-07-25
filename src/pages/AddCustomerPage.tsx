import React, { useState } from 'react';
import { useCustomers } from '../hooks/useCustomers';

const AddCustomerPage: React.FC = () => {
  const { addCustomer, loading } = useCustomers();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await addCustomer({ name, email, phone });
      setSuccess(true);
      setName(''); setEmail(''); setPhone('');
    } catch (err: any) {
      setError('Eroare la adăugare!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-sm bg-base-100/80 border border-primary/40 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-float glassmorphism">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">Adaugă client</h2>
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
            type="text"
            placeholder="Telefon"
            className="input input-bordered input-primary w-full bg-base-200/80"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          {error && <div className="text-error text-sm text-center">{error}</div>}
          {success && <div className="text-success text-sm text-center">Client adăugat cu succes!</div>}
          <button
            type="submit"
            className="btn btn-primary w-full font-semibold shadow-lg hover:scale-105 transition-all"
            disabled={loading}
          >
            {loading ? 'Se adaugă...' : 'Adaugă client'}
          </button>
        </form>
        <a href="/customers" className="btn btn-secondary mt-4">Înapoi la listă</a>
      </div>
    </div>
  );
};

export default AddCustomerPage;
