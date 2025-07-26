import { describe, it, expect } from "vitest";
import { routes } from "./router";

describe("registerRoutes", () => {
  it("sunt incluse in rutele publice", () => {
    const children = routes[0].children ?? [];
    const paths = children.map((route) => route.path);
    expect(paths).toContain("/register/client");
    expect(paths).toContain("/register/partner");
    expect(paths).toContain("/register/collaborator");
    expect(paths).toContain("/register/courier");
  });
});
