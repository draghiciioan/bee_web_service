import { useState, useEffect } from 'react';
import { customersApi } from '../api';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await customersApi.get('/customers');
      setCustomers(res.data);
      setError(null);
    } catch (e: unknown) {
      if (e instanceof Error) setError(e.message);
      else setError('Eroare la preluarea clienților');
    }
    setLoading(false);
  };

  const addCustomer = async (data: Omit<Customer, 'id'>) => {
    const res = await customersApi.post('/customers', data);
    setCustomers((prev) => [...prev, res.data]);
  };

  const updateCustomer = async (id: string, data: Partial<Customer>) => {
    const res = await customersApi.put(`/customers/${id}`, data);
    setCustomers((prev) => prev.map((c) => (c.id === id ? res.data : c)));
  };

  const deleteCustomer = async (id: string) => {
    await customersApi.delete(`/customers/${id}`);
    setCustomers((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return { customers, loading, error, addCustomer, updateCustomer, deleteCustomer, fetchCustomers };
}
