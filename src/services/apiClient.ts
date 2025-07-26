import axios from "axios";

// Adresa de bază pentru API-ul de autentificare
const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL || "";

// Creează instanța Axios folosită în aplicație
const apiClient = axios.create({
  baseURL: AUTH_API_URL,
});

// Adaugă interceptor pentru request ✅
apiClient.interceptors.request.use(
  (config) => {
    // TODO: atașează tokenul de autentificare aici
    return config;
  },
  (error) => Promise.reject(error)
);

// Adaugă interceptor pentru răspuns ✅
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: tratează erorile global aici
    return Promise.reject(error);
  }
);

export default apiClient;