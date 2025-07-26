import { renderHook, act, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi, describe, it, expect } from "vitest";
import apiClient from "@/services/apiClient";
import { useResetPassword } from "./useResetPassword";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useResetPassword", () => {
  it("apeleaza API-ul pentru confirmare resetare", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});
    const { result } = renderHook(() => useResetPassword(), { wrapper });

    act(() => {
      result.current.mutate({ token: "abc", password: "noua" });
    });

    await waitFor(() => {
      expect(postSpy).toHaveBeenCalledWith("/v1/auth/reset-password", {
        token: "abc",
        password: "noua",
      });
    });
  });
});
