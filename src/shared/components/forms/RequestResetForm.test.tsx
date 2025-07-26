import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RequestResetForm from "./RequestResetForm";
import { vi, describe, it, expect } from "vitest";

const mutate = vi.fn();
vi.mock("@/hooks/useRequestReset", () => ({
  useRequestReset: () => ({ mutate, isPending: false, isSuccess: false, error: null }),
}));

describe("RequestResetForm", () => {
  it("afiseaza erori de validare", async () => {
    render(<RequestResetForm />);

    fireEvent.click(screen.getByRole("button", { name: /Trimite link/i }));

    expect(await screen.findAllByText(/obligatoriu/)).toHaveLength(1);
  });

  it("trimite emailul", async () => {
    render(<RequestResetForm />);

    fireEvent.change(screen.getByLabelText(/Email/), {
      target: { value: "test@bee.ro" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Trimite link/i }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({ email: "test@bee.ro" });
    });
  });
});
