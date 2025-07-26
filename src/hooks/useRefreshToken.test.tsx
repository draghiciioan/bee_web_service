import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useRefreshToken } from "./useRefreshToken";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useRefreshToken", () => {
  it("apeleaza API-ul de refresh", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({ data: {} });
    const { result } = renderHook(() => useRefreshToken(), { wrapper });

    act(() => {
      result.current.mutate({ refresh: "token" });
    });

    await waitFor(() => {
      expect(postSpy).toHaveBeenCalledWith("/v1/auth/refresh", { refresh: "token" });
    });
  });
});
