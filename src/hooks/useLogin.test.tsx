import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useLogin } from "./useLogin";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useLogin", () => {
  it("apeleaza API-ul de login", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({ data: {} });
    const { result } = renderHook(() => useLogin(), { wrapper });

    act(() => {
      result.current.mutate({ email: "test@bee.ro", password: "parola" });
    });

    await waitFor(() => {
      expect(postSpy).toHaveBeenCalledWith("/v1/auth/login", {
        email: "test@bee.ro",
        password: "parola",
      });
    });
  });
});
