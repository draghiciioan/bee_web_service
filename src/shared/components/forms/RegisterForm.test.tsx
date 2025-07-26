import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import { vi, describe, it, expect } from "vitest";

const mutate = vi.fn();
vi.mock("@/hooks/useRegister", () => ({
  useRegister: () => ({ mutate, isPending: false, error: null })
}));

describe("RegisterForm", () => {
  it("trimite datele completate", async () => {
    render(<RegisterForm role="client" />);

    fireEvent.change(screen.getByLabelText(/Email/), {
      target: { value: "test@bee.ro" }
    });
    fireEvent.change(screen.getByLabelText(/Nume complet/), {
      target: { value: "Ion Pop" }
    });
    fireEvent.change(screen.getByLabelText(/Telefon/), {
      target: { value: "0712345678" }
    });
    fireEvent.change(screen.getByLabelText(/Parolă/), {
      target: { value: "parola123" }
    });

    fireEvent.click(screen.getByRole("button", { name: /Creează cont/i }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({
        email: "test@bee.ro",
        full_name: "Ion Pop",
        phone_number: "0712345678",
        password: "parola123",
        role: "client"
      });
    });
  });
});
