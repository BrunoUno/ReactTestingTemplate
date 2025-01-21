import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("must have the text (My Default React App) displaying correctly", () => {
  render(<App />);
  screen.debug();
  const element = screen.getByText(/My Default React App/);
  expect(element).toBeInTheDocument();
});
