import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { ROLE_PARTNER } from "@/shared/constants/roles";

let receivedRole: string | undefined;
vi.mock("@/shared/components/forms/RegisterForm", () => ({
  __esModule: true,
  default: (props: { role: string }) => {
    receivedRole = props.role;
    return <div data-testid="register-form" />;
  }
}));

import RegisterPartner from "../RegisterPartner";

describe("RegisterPartner", () => {
  it("paseaza rolul partner catre RegisterForm", () => {
    render(<RegisterPartner />);
    expect(receivedRole).toBe(ROLE_PARTNER);
  });
});
