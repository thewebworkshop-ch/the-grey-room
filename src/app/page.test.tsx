import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /to get started, edit the page\.tsx file/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the Deploy Now button", () => {
    render(<Home />);

    const deployButton = screen.getByRole("link", { name: /deploy now/i });

    expect(deployButton).toBeInTheDocument();
    expect(deployButton).toHaveAttribute("href");
  });

  it("renders the Documentation link", () => {
    render(<Home />);

    const docLink = screen.getByRole("link", { name: /documentation/i });

    expect(docLink).toBeInTheDocument();
    expect(docLink).toHaveAttribute("target", "_blank");
  });
});
