// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";

import Home from "../pages/index";

import NotFoundPage from "@/pages/404";
import "@testing-library/jest-dom";
import Components from "@/pages/components";

describe("Render Page Normally", () => {
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
  it("Renders 404 page successfully!", () => {
    render(<NotFoundPage />);
    const heading = screen.getByText("Page Not Found");
    expect(heading).toBeInTheDocument();
  });
});
