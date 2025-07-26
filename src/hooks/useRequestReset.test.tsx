import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useRequestReset } from "./useRequestReset";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useRequestReset", () => {
  it("apeleaza API-ul pentru resetare", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});
    const { result } = renderHook(() => useRequestReset(), { wrapper });

    act(() => {
      result.current.mutate({ email: "test@bee.ro" });
    });

    await waitFor(() => {
      expect(postSpy).toHaveBeenCalledWith("/v1/auth/password/reset", { email: "test@bee.ro" });
    });
  });
});
