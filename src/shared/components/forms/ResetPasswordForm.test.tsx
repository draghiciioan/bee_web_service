import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ResetPasswordForm from "./ResetPasswordForm";
import { vi, describe, it, expect } from "vitest";

const mutate = vi.fn();
vi.mock("@/hooks/useResetPassword", () => ({
  useResetPassword: () => ({ mutate, isPending: false, isSuccess: false, error: null }),
}));

describe("ResetPasswordForm", () => {
  it("afiseaza erori de validare", async () => {
    render(<ResetPasswordForm token="abc" />);

    fireEvent.click(screen.getByRole("button", { name: /Resetează/i }));

    expect(await screen.findAllByText(/Parola/)).toHaveLength(1);
  });

  it("trimite parola noua", async () => {
    render(<ResetPasswordForm token="abc" />);

    fireEvent.change(screen.getByLabelText(/Parolă nouă/), {
      target: { value: "parola123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Resetează/i }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({ token: "abc", password: "parola123" });
    });
  });
});
