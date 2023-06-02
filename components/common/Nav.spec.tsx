import { render } from "@testing-library/react";
import { usePathname } from "next/navigation";
import Nav from "./Nav";

jest.mock("next/navigation");

describe("Nav", () => {
  it("renders without crashing", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    const { getByRole } = render(<Nav />);
    const navElement = getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  it("renders the correct tabs", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    const { getByText } = render(<Nav />);
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Blog")).toBeInTheDocument();
  });
  it("renders the active nav bubble with the correct content", () => {
    (usePathname as jest.Mock).mockReturnValue("/blog");
    const { getByTestId } = render(<Nav />);
    const activeNavLabel = getByTestId("active-nav-label");
    const activeNavBubble = getByTestId("active-nav-bubble");

    expect(activeNavBubble).toBeInTheDocument();
    expect(activeNavLabel).toBeInTheDocument();
    expect(activeNavLabel).toHaveTextContent("Blog");
    expect(activeNavBubble.className).toBe(
      "absolute inset-0 z-10 bg-dark/20 dark:bg-light/20 mix-blend-difference rounded-lg"
    );
  });
});
