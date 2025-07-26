import { vi, describe, it, expect } from "vitest";
import { registerUser } from "./auth";
import apiClient from "./apiClient";

describe("registerUser", () => {
  it("apelează API-ul cu datele de înregistrare", async () => {
    const postSpy = vi.spyOn(apiClient, "post").mockResolvedValue({});

    const data = {
      email: "test@bee.ro",
      full_name: "Ion Pop",
      phone_number: "0712345678",
      password: "parola",
      role: "client"
    };
    await registerUser(data);

    expect(postSpy).toHaveBeenCalledWith("/register", data);
  });
});
