import axios from "axios";

// Functie folosită pentru a obține tokenul curent
let accessTokenGetter: (() => string | null) | null = null;

// Permite setarea funcției din exterior (AuthContext)
export const setAccessTokenGetter = (getter: () => string | null) => {
  accessTokenGetter = getter;
};

// Adresa de bază pentru API-ul de autentificare
const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL || "";

// Creează instanța Axios folosită în aplicație
const apiClient = axios.create({
  baseURL: AUTH_API_URL,
});

// Adaugă interceptor pentru request ✅
apiClient.interceptors.request.use(
  (config) => {
    // Atașează tokenul JWT dacă este disponibil
    if (accessTokenGetter) {
      const token = accessTokenGetter();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
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