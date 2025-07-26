import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useVerifyEmail } from "./useVerifyEmail";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useVerifyEmail", () => {
  it("apeleaza API-ul pentru verificarea email", async () => {
    const getSpy = vi.spyOn(apiClient, "get").mockResolvedValue({});
    const { result } = renderHook(() => useVerifyEmail(), { wrapper });

    act(() => {
      result.current.mutate("abc");
    });

    await waitFor(() => {
      expect(getSpy).toHaveBeenCalledWith("/v1/auth/verify-email", { params: { token: "abc" } });
    });
  });
});
