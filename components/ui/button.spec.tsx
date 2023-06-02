import { fireEvent, render } from "@testing-library/react";
import { Button, buttonVariants } from "./button";

describe("Button", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Button data-testid="button" />);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies the default variant when no variant prop is provided", () => {
    const { getByTestId } = render(<Button data-testid="button" />);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "default", size: "default" }).join(" ")
    );
  });

  it("applies the correct variant class when a variant prop is provided", () => {
    const { getByTestId } = render(
      <Button data-testid="button" variant="secondary" />
    );
    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveClass(
      buttonVariants({ variant: "secondary", size: "default" }).join(" ")
    );
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <Button data-testid="button" className="text-red-500" />
    );
    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveClass("text-red-500");
  });

  it("calls the onClick function when the button is clicked", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="button" onClick={handleClick} />
    );
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a child when the asChild prop is true", () => {
    const { getByTestId } = render(
      <Button data-testid="button" asChild>
        <span>Click me</span>
      </Button>
    );
    const buttonElement = getByTestId("button");
    expect(buttonElement.tagName).toBe("SLOT");
    expect(buttonElement.firstChild).toHaveTextContent("Click me");
  });
});
