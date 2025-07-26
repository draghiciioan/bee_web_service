import { vi, describe, it, expect } from "vitest";
import {
  registerUser,
  loginUser,
  logout,
  refreshToken,
  requestPasswordReset,
  resetPassword,
  verifyEmail,
  verify2FA,
  setup2FA,
  socialLogin,
  socialCallback,
  currentUser,
  validateToken,
} from "./auth";
import apiClient from "./apiClient";

describe("registerUser", () => {
  it("apelează API-ul cu datele de înregistrare", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    const data = {
      email: "test@bee.ro",
      full_name: "Ion Pop",
      phone_number: "0712345678",
      password: "parola",
      role: "client"
    };
    await registerUser(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/register", data);
  });
});

describe("loginUser", () => {
  it("apelează API-ul cu datele de autentificare", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({ data: {} });

    const data = { email: "test@bee.ro", password: "parola" };
    await loginUser(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/login", data);
  });
});

describe("logout", () => {
  it("apelează API-ul pentru logout", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    await logout("token");

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/logout", { refresh: "token" });
  });
});

describe("refreshToken", () => {
  it("apelează API-ul pentru reîmprospătare", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({ data: {} });

    const data = { refresh: "token" };
    await refreshToken(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/refresh", data);
  });
});

describe("requestPasswordReset", () => {
  it("apelează API-ul pentru solicitarea resetării", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    const data = { email: "test@bee.ro" };
    await requestPasswordReset(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/password/reset", data);
  });
});

describe("resetPassword", () => {
  it("apelează API-ul pentru confirmarea resetării", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    const data = { token: "abc", password: "nouaParola" };
    await resetPassword(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/password/reset/confirm", data);
  });
});

describe("verifyEmail", () => {
  it("apelează API-ul pentru verificarea emailului", async () => {
    const getSpy = vi.spyOn(apiClient, "get").mockResolvedValue({});

    await verifyEmail("abc");

    expect(getSpy).toHaveBeenCalledWith("/v1/auth/verify-email", { params: { token: "abc" } });
  });
});

describe("verify2FA", () => {
  it("apelează API-ul pentru verificarea 2FA", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    const data = { code: "123456" };
    await verify2FA(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/2fa/verify", data);
  });
});

describe("setup2FA", () => {
  it("apelează API-ul pentru configurarea 2FA", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({ data: {} });

    const data = { email: "test@bee.ro" };
    await setup2FA(data);

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/2fa/setup", data);
  });
});

describe("socialLogin", () => {
  it("apelează API-ul pentru social login", async () => {
    const getSpy = vi.spyOn(apiClient, "get").mockResolvedValue({ data: {} });

    await socialLogin("google");

    expect(getSpy).toHaveBeenCalledWith("/v1/auth/google");
  });
});

describe("socialCallback", () => {
  it("apelează API-ul pentru social callback", async () => {
    const getSpy = vi.spyOn(apiClient, "get").mockResolvedValue({ data: {} });

    const query = { code: "abc" };
    await socialCallback("google", query);

    expect(getSpy).toHaveBeenCalledWith("/v1/auth/google/callback", { params: query });
  });
});

describe("currentUser", () => {
  it("apelează API-ul pentru obținerea utilizatorului curent", async () => {
    const getSpy = vi.spyOn(apiClient, "get").mockResolvedValue({ data: {} });

    await currentUser();

    expect(getSpy).toHaveBeenCalledWith("/v1/auth/me");
  });
});

describe("validateToken", () => {
  it("apelează API-ul pentru validarea tokenului", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    await validateToken("abc");

    expect(postSpy).toHaveBeenCalledWith("/v1/auth/validate-token", { token: "abc" });
  });
});
