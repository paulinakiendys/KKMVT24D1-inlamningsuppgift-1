import { login } from "./login";

describe("login function", () => {
  it("should return true if username is 'admin' and password is 'password123'", () => {
    expect(login({ username: "admin", password: "password123" })).toBeTruthy();
  });

  it("should return false if username is not 'admin'", () => {
    expect(
      login({ username: "username", password: "password123" })
    ).toBeFalsy();
  });

  it("should return false if password is not 'password123'", () => {
    expect(login({ username: "admin", password: "password" })).toBeFalsy();
  });

  it("should return false if username is not 'admin' and password is not 'password123'", () => {
    expect(login({ username: "username", password: "password" })).toBeFalsy();
  });
});
