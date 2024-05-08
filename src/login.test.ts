import { login } from "./login";
import { LoginCredentials, LoginResponse } from "./types";

describe("login function", () => {
  const validCredentials: LoginCredentials = {
    username: "admin",
    password: "password123",
  };

  const invalidCredentials: LoginCredentials = {
    username: "username",
    password: "password",
  };

  const emptyCredentials: LoginCredentials = {
    username: "",
    password: "",
  };

  const correctValidResponse: LoginResponse = {
    message: "Korrekt användarnamn och lösenord",
    success: true,
  };

  const correctInvalidResponse: LoginResponse = {
    message: "Felaktigt användarnamn eller lösenord",
    success: false,
  };

  const correctEmptyResponse: LoginResponse = {
    message: "Felaktig input",
    success: false,
  };

  /*
  // Krav för G
  it("should have two parameters", () => {
    const f = jest.fn(login);
    f(validCredentials);
    expect(f).toHaveBeenCalledWith(validCredentials);
  });

  it("should return true if username is 'admin' and password is 'password123'", () => {
    expect(login(validCredentials)).toBeTruthy();
  });

  it("should return false if username is not 'admin' or password is not 'password123'", () => {
    expect(login(invalidCredentials)).toBeFalsy();
  });
  */

  // Krav för VG
  it("should have two parameters", () => {
    const f = jest.fn(login);
    f(validCredentials);
    expect(f).toHaveBeenCalledWith(validCredentials);
  });

  it("should return correct response for valid credentials", () => {
    expect(login(validCredentials)).toEqual(correctValidResponse);
  });

  it("should return correct response for invalid credentials", () => {
    expect(login(invalidCredentials)).toEqual(correctInvalidResponse);
  });

  it("should return correct response for empty credentials", () => {
    expect(login(emptyCredentials)).toEqual(correctEmptyResponse);
  });
});
