import { LoginCredentials, LoginResponse } from "./types";

export const login = ({ username, password }: LoginCredentials) => {
  const validUsername = "admin";
  const validPassword = "password123";

  /*
  // Krav för G
  return username === validUsername && password === validPassword;
  */

  // Krav för VG
  if (!username || !password) {
    return { message: "Felaktig input", success: false };
  }

  if (username === validUsername && password === validPassword) {
    return { message: "Korrekt användarnamn och lösenord", success: true };
  } else {
    return { message: "Felaktigt användarnamn eller lösenord", success: false };
  }
};

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

const validCredentialsResponse: LoginResponse = login(validCredentials);
const invalidCredentialsResponse: LoginResponse = login(invalidCredentials);
const emptyCredentialsResponse: LoginResponse = login(emptyCredentials);

console.log("Valid credentials response:", validCredentialsResponse);
console.log("Invalid credentials response:", invalidCredentialsResponse);
console.log("Empty credentials response:", emptyCredentialsResponse);
