import axios from "axios";

// Functie folosită pentru a obține tokenul curent
// Functie folosită pentru a obține tokenul curent
let accessTokenGetter: (() => string | null) | null = null;
// Funcție folosită pentru a reîmprospăta tokenul
let refreshTokenHandler: (() => Promise<void>) | null = null;

// Permite setarea funcției din exterior (AuthContext)
export const setAccessTokenGetter = (getter: () => string | null) => {
  accessTokenGetter = getter;
};

// Permite setarea funcției de refresh din exterior (AuthContext)
export const setRefreshTokenHandler = (handler: () => Promise<void>) => {
  refreshTokenHandler = handler;
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
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    // În caz de 401 încearcă reîmprospătarea tokenului o singură dată
    if (status === 401 && !originalRequest._retry && refreshTokenHandler) {
      originalRequest._retry = true;
      try {
        await refreshTokenHandler();
        if (accessTokenGetter) {
          const newToken = accessTokenGetter();
          if (newToken) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
          }
        }
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error("Eroare la reîmprospătarea tokenului:", refreshError);
        return Promise.reject(refreshError);
      }
    }

    console.error("Eroare API", {
      url: originalRequest?.url,
      method: originalRequest?.method,
      status,
      data: error.response?.data,
    });
    return Promise.reject(error);
  },
);

export default apiClient;