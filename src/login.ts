import { LoginCredentials } from "./types";

export const login = (loginCredentials: LoginCredentials) => {
  return (
    loginCredentials.username === "admin" &&
    loginCredentials.password === "password123"
  );
};
