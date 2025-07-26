import apiClient from "./apiClient";

export interface RegisterData {
  email: string;
  full_name: string;
  phone_number?: string | null;
  password: string;
  role: string;
}

export const registerUser = async (
  data: RegisterData,
): Promise<void> => {
  // Trimite datele de înregistrare către microserviciul de autentificare
  await apiClient.post("/v1/auth/register", data);
};

export interface UserLogin {
  email: string;
  password: string;
}

export interface JwtPair {
  access: string;
  refresh: string;
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  phone_number?: string | null;
  role: string;
}

export interface LoginResponse {
  tokens: JwtPair;
  user: User;
}

export interface RefreshTokenRequest {
  refresh: string;
}

export const loginUser = async (
  data: UserLogin,
): Promise<LoginResponse> => {
  // Trimite cererea de autentificare
  const response = await apiClient.post<LoginResponse>("/v1/auth/login", data);
  return response.data;
};

export const logout = async (refreshToken: string): Promise<void> => {
  // Invalidează tokenul de reîmprospătare pe server
  await apiClient.post("/v1/auth/logout", { refresh: refreshToken });
};

export const refreshToken = async (
  refresh: RefreshTokenRequest,
): Promise<JwtPair> => {
  // Obține un nou set de token-uri
  const response = await apiClient.post<JwtPair>("/v1/auth/refresh", refresh);
  return response.data;
};

export interface PasswordResetRequest {
  email: string;
}

export const requestPasswordReset = async (
  data: PasswordResetRequest,
): Promise<void> => {
  // Solicită resetarea parolei
  await apiClient.post("/v1/auth/request-reset", data);
};

export interface ResetPasswordData {
  token: string;
  password: string;
}

export const resetPassword = async (
  data: ResetPasswordData,
): Promise<void> => {
  // Trimite parola nouă împreună cu tokenul primit pe email
  await apiClient.post("/v1/auth/reset-password", data);
};

export const verifyEmail = async (token: string): Promise<void> => {
  // Confirmă adresa de email pe baza tokenului
  await apiClient.get("/v1/auth/verify-email", { params: { token } });
};

export interface TwoFactorVerify {
  code: string;
}

export const verify2FA = async (
  data: TwoFactorVerify,
): Promise<void> => {
  // Verifică codul 2FA introdus de utilizator
  await apiClient.post("/v1/auth/verify-2fa", data);
};

export interface TwoFactorSetup {
  email: string;
}

export interface TwoFactorSetupResponse {
  qr: string;
  secret: string;
}

export const setup2FA = async (
  data: TwoFactorSetup,
): Promise<TwoFactorSetupResponse> => {
  // Inițializează configurarea 2FA pentru utilizator
  const response = await apiClient.post<TwoFactorSetupResponse>(
    "/v1/auth/setup-2fa",
    data,
  );
  return response.data;
};

export const socialLogin = async (
  provider: string,
): Promise<{ url: string }> => {
  // Obține URL-ul de redirectare către providerul social
  const response = await apiClient.get<{ url: string }>(
    "/v1/auth/social/login",
    { params: { provider } },
  );
  return response.data;
};

export const socialCallback = async (
  provider: string,
  query: Record<string, string>,
): Promise<LoginResponse> => {
  // Procesează răspunsul providerului social
  const response = await apiClient.get<LoginResponse>(
    "/v1/auth/social/callback",
    { params: { provider, ...query } },
  );
  return response.data;
};

export const currentUser = async (): Promise<User> => {
  // Returnează utilizatorul curent autentificat
  const response = await apiClient.get<User>("/v1/auth/me");
  return response.data;
};

export const validateToken = async (token: string): Promise<void> => {
  // Verifică validitatea tokenului pe server
  await apiClient.post("/v1/auth/validate", { token });
};
