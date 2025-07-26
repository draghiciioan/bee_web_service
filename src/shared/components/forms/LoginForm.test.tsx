import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { vi, describe, it, expect } from "vitest";

const mutate = vi.fn();
vi.mock("@/hooks/useLogin", () => ({
  useLogin: () => ({ mutate, isPending: false, error: null }),
}));

describe("LoginForm", () => {
  it("afiseaza erori de validare", async () => {
    render(<LoginForm />);

    fireEvent.click(screen.getByRole("button", { name: /Autentificare/i }));

    expect(await screen.findAllByText(/obligatori/)).toHaveLength(2);
  });

  it("trimite datele completate", async () => {
    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/Email/), {
      target: { value: "test@bee.ro" },
    });
    fireEvent.change(screen.getByLabelText(/Parolă/), {
      target: { value: "parola123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Autentificare/i }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({
        email: "test@bee.ro",
        password: "parola123",
      });
    });
  });
});
