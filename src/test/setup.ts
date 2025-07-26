import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Curăță DOM-ul după fiecare test pentru izolare
afterEach(() => {
  cleanup();
});
