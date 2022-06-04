// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

import "@testing-library/jest-dom";
import Components from "@/pages/components";

describe("Home", () => {
  it("Renders Home Page Successfully", () => {
    render(<Home />);
    const heading = screen.getByText("Hello World!");
    expect(heading).toBeInTheDocument();
  });

  it("Renders Components Page Successfully", () => {
    render(<Components />);
    const heading = screen.getByText("Reusable Components");
    expect(heading).toBeInTheDocument();
  });
});
