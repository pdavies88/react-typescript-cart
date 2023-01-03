import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders react typescript text", () => {
  render(<App />);
  const textEl = screen.getByText(/react typescript/i);
  expect(textEl).toBeInTheDocument();
});
