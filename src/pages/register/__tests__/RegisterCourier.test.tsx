import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { ROLE_COURIER } from "@/shared/constants/roles";

let receivedRole: string | undefined;
vi.mock("@/shared/components/forms/RegisterForm", () => ({
  __esModule: true,
  default: (props: { role: string }) => {
    receivedRole = props.role;
    return <div data-testid="register-form" />;
  }
}));

import RegisterCourier from "../RegisterCourier";

describe("RegisterCourier", () => {
  it("paseaza rolul courier catre RegisterForm", () => {
    render(<RegisterCourier />);
    expect(receivedRole).toBe(ROLE_COURIER);
  });
});
