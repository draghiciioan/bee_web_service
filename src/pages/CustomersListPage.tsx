import React from 'react';
import { useCustomers } from '../hooks/useCustomers';

const CustomersListPage: React.FC = () => {
  const { customers, loading, error, deleteCustomer } = useCustomers();

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Clienți</h2>
      <a href="/add-customer" className="btn btn-primary mb-4">Adaugă client</a>
      {loading && <div>Se încarcă...</div>}
      {error && <div className="text-error">{error}</div>}
      <table className="table w-full">
        <thead>
          <tr>
            <th>Nume</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Acțiuni</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone || '-'}</td>
              <td>
                <a href={`/customer/${c.id}`} className="btn btn-sm btn-info mr-2">Detalii</a>
                <button className="btn btn-sm btn-error" onClick={() => deleteCustomer(c.id)}>Șterge</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersListPage; 