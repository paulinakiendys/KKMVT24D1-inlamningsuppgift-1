[![Super-Linter](https://github.com/paulinakiendys/KKMVT24D1-inlamningsuppgift-1/actions/workflows/super-linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

# Course assignment: Node.js & Jest Unit Tests

This repository contains a Node.js application with a JavaScript function and unit tests implemented using Jest. The function to be tested is a login function with the following requirements:

- The function takes two parameters: `username` and `password`.
- It returns `true` if the `username` is "admin" and the `password` is "password123". Otherwise, it returns `false`.
- This functionality is encapsulated in its own file.

## Requirements

### Pass Grade (G):

- Create a JavaScript function named `login` that takes two parameters: `username` and `password`.
- The function returns `true` if `username` is "admin" and `password` is "password123". Otherwise, it returns `false`.
- Write at least three unit tests using Jest for the `login` function. Test various combinations of valid and invalid usernames and passwords to ensure the function works correctly.
- Achieve a test coverage of at least 80% using Jest.

### Pass with Distinction (VG):

- Implement error handling in the `login` function to return an error message if the username or password is incorrect. The message should be "Invalid username or password" and should be returned along with a boolean indicating whether the login was successful or not.
- If either or both parameters are either an empty string, the method should return the string "Invalid input".
- Write at least three additional unit tests with Jest to test if the function returns the correct type of error when invalid credentials are used.

**Submission Deadline:** Friday, May 10th.
