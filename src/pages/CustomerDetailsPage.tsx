import React from 'react';
import { useParams } from 'react-router-dom';
import { useCustomers } from '../hooks/useCustomers';

const CustomerDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { customers } = useCustomers();
  const customer = customers.find((c) => c.id === id);

  if (!customer) return <div className="text-center mt-10">Clientul nu a fost găsit.</div>;

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Detalii client</h2>
      <div className="bg-base-100 p-6 rounded-xl shadow-md max-w-md mx-auto">
        <div><b>Nume:</b> {customer.name}</div>
        <div><b>Email:</b> {customer.email}</div>
        <div><b>Telefon:</b> {customer.phone || '-'}</div>
      </div>
      <a href="/customers" className="btn btn-secondary mt-6">Înapoi la listă</a>
    </div>
  );
};

export default CustomerDetailsPage; 