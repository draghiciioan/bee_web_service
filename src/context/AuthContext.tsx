/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  loginUser,
  logout as logoutService,
  refreshToken,
  type UserLogin,
  type User,
  type JwtPair,
} from "@/services/auth";
import {
  setAccessTokenGetter,
  setRefreshTokenHandler,
} from "@/services/apiClient";

interface AuthContextValue {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  login: (data: UserLogin) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth trebuie folosit in interiorul AuthProvider");
  }
  return context;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("accessToken"),
  );
  const [refreshTokenValue, setRefreshTokenValue] = useState<string | null>(
    localStorage.getItem("refreshToken"),
  );
  const [user, setUser] = useState<User | null>(null);

  const saveTokens = (tokens: JwtPair) => {
    setAccessToken(tokens.access);
    setRefreshTokenValue(tokens.refresh);
    localStorage.setItem("accessToken", tokens.access);
    localStorage.setItem("refreshToken", tokens.refresh);
  };

  const login = async (data: UserLogin) => {
    const response = await loginUser(data);
    saveTokens(response.tokens);
    setUser(response.user);
  };

  const logout = async () => {
    if (refreshTokenValue) {
      await logoutService(refreshTokenValue);
    }
    setUser(null);
    setAccessToken(null);
    setRefreshTokenValue(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const refresh = useCallback(async () => {
    if (!refreshTokenValue) return;
    const tokens = await refreshToken({ refresh: refreshTokenValue });
    saveTokens(tokens);
  }, [refreshTokenValue]);

  useEffect(() => {
    setAccessTokenGetter(() => accessToken);
    setRefreshTokenHandler(refresh);
  }, [accessToken, refreshTokenValue, refresh]);

  const value: AuthContextValue = {
    user,
    accessToken,
    refreshToken: refreshTokenValue,
    login,
    logout,
    refresh,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
