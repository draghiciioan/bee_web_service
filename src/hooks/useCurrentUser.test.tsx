import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useCurrentUser } from "./useCurrentUser";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useCurrentUser", () => {
  it("apeleaza API-ul pentru utilizatorul curent", async () => {
    const getSpy = vi.spyOn(apiClient, "get").mockResolvedValue({ data: {} });
    const { result } = renderHook(() => useCurrentUser(), { wrapper });

    await waitFor(() => {
      expect(getSpy).toHaveBeenCalledWith("/v1/auth/me");
      expect(result.current.isSuccess).toBe(true);
    });
  });
});
