import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import MockAdapter from "axios-mock-adapter";
import apiClient, {
  setAccessTokenGetter,
  setRefreshTokenHandler,
} from "./apiClient";

let mock: MockAdapter;

beforeEach(() => {
  mock = new MockAdapter(apiClient);
});

afterEach(() => {
  mock.restore();
  vi.resetAllMocks();
});

describe("apiClient interceptors", () => {
  it("adauga antetul Authorization din AuthContext", async () => {
    setAccessTokenGetter(() => "token");
    mock.onGet("/test").reply(200, {});

    await apiClient.get("/test");

    expect(mock.history.get[0]!.headers?.Authorization).toBe("Bearer token");
  });

  it("reîmprospătează tokenul și retrimite cererea o dată la 401", async () => {
    let token = "expired";
    setAccessTokenGetter(() => token);
    const refresh = vi.fn(async () => {
      token = "newToken";
    });
    setRefreshTokenHandler(refresh);

    mock.onGet("/protected").replyOnce(401).onGet("/protected").replyOnce(200, { ok: true });

    const response = await apiClient.get("/protected");

    expect(refresh).toHaveBeenCalledOnce();
    expect(response.data).toEqual({ ok: true });
    expect(mock.history.get.length).toBe(2);
    expect(mock.history.get[1]!.headers?.Authorization).toBe("Bearer newToken");
  });

  it("propagă erori non-401", async () => {
    mock.onGet("/error").reply(500);

    await expect(apiClient.get("/error")).rejects.toThrow();
  });
});
