import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { ROLE_CLIENT } from "@/shared/constants/roles";

let receivedRole: string | undefined;
vi.mock("@/shared/components/forms/RegisterForm", () => ({
  __esModule: true,
  default: (props: { role: string }) => {
    receivedRole = props.role;
    return <div data-testid="register-form" />;
  }
}));

import RegisterClient from "../RegisterClient";

describe("RegisterClient", () => {
  it("paseaza rolul client catre RegisterForm", () => {
    render(<RegisterClient />);
    expect(receivedRole).toBe(ROLE_CLIENT);
  });
});
