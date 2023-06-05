import { render } from "@testing-library/react";
import { Badge, badgeVariants } from "./badge";

describe("Badge", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Badge data-testid="badge" />);
    const badgeElement = getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies the default variant when no variant prop is provided", () => {
    const { getByTestId } = render(<Badge data-testid="badge" />);
    const badgeElement = getByTestId("badge");
    expect(badgeElement).toHaveClass(badgeVariants({ variant: "default" }));
  });

  it("applies the correct variant class when a variant prop is provided", () => {
    const { getByTestId } = render(
      <Badge data-testid="badge" variant="secondary" />
    );
    const badgeElement = getByTestId("badge");
    expect(badgeElement).toHaveClass(badgeVariants({ variant: "secondary" }));
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <Badge data-testid="badge" className="text-red-500" />
    );
    const badgeElement = getByTestId("badge");
    expect(badgeElement).toHaveClass("text-red-500");
  });
});
