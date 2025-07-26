import { render } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { ROLE_COLLABORATOR } from "@/shared/constants/roles";

let receivedRole: string | undefined;
vi.mock("@/shared/components/forms/RegisterForm", () => ({
  __esModule: true,
  default: (props: { role: string }) => {
    receivedRole = props.role;
    return <div data-testid="register-form" />;
  }
}));

import RegisterCollaborator from "../RegisterCollaborator";

describe("RegisterCollaborator", () => {
  it("paseaza rolul collaborator catre RegisterForm", () => {
    render(<RegisterCollaborator />);
    expect(receivedRole).toBe(ROLE_COLLABORATOR);
  });
});
