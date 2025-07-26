import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useVerify2FA } from "./useVerify2FA";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useVerify2FA", () => {
  it("apeleaza API-ul pentru verificarea 2FA", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});
    const { result } = renderHook(() => useVerify2FA(), { wrapper });

    act(() => {
      result.current.mutate({ code: "123" });
    });

    await waitFor(() => {
      expect(postSpy).toHaveBeenCalledWith("/v1/auth/2fa/verify", { code: "123" });
    });
  });
});
