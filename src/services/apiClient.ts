import axios from "axios";

// Create base URLs with HTTPS instead of HTTP
const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL?.replace("http://", "https://") || "https://localhost:8001";
const CUSTOMERS_API_URL = import.meta.env.VITE_CUSTOMERS_API_URL?.replace("http://", "https://") || "https://localhost:8016";

// Create axios instances for different services
export const authApi = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const customersApi = axios.create({
  baseURL: CUSTOMERS_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
const addAuthToken = (config: { headers: Record<string, string> }) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

// Add response interceptor to handle common errors
const handleResponseError = (error: {
  response?: {
    status: number;
    data: unknown;
  };
}) => {
  if (error.response) {
    // Handle specific error codes
    if (error.response.status === 401) {
      // Unauthorized - redirect to login
      window.location.href = "/login";
    }
    
    // Log the error for debugging
    console.error("API Error:", error.response.data);
  }
  return Promise.reject(error);
};

// Apply interceptors
authApi.interceptors.request.use(addAuthToken);
customersApi.interceptors.request.use(addAuthToken);

authApi.interceptors.response.use(response => response, handleResponseError);
customersApi.interceptors.response.use(response => response, handleResponseError);

// Export default API for common usage
export default {
  auth: authApi,
  customers: customersApi,
};