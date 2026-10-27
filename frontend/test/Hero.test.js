import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Signup from "../landing_page/signup/Signup";

describe("Signup Component", () => {
  test("renders signup form inputs and button", () => {
    render(<Signup />);

    // Check heading
    const heading = screen.getByRole("heading", { name: /open a zerodha account/i });
    expect(heading).toBeInTheDocument();

    // Check input placeholders
    const emailInput = screen.getByPlaceholderText("Email");
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(emailInput).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // Check submit button
    const submitButton = screen.getByRole("button", { name: /sign up/i });
    expect(submitButton).toBeInTheDocument();
  });
});