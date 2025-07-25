import axios from 'axios';

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL || 'http://localhost:8001',
  withCredentials: true,
});

export const customersApi = axios.create({
  baseURL: import.meta.env.VITE_CUSTOMERS_API_URL || 'http://localhost:8002',
  withCredentials: true,
});
