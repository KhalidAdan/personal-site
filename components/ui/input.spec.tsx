import { render } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Input data-testid="input" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies the correct default classes", () => {
    const { getByTestId } = render(<Input data-testid="input" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass(
      "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    );
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <Input data-testid="input" className="text-red-500" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass("text-red-500");
  });

  it("applies the correct type attribute when a type prop is provided", () => {
    const { getByTestId } = render(
      <Input data-testid="input" type="password" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("passes through additional props to the input element", () => {
    const { getByTestId } = render(
      <Input data-testid="input" name="username" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveAttribute("name", "username");
  });
});

describe("Input", () => {
  it("renders without crashing", () => {
    const { getByTestId } = render(<Input data-testid="input" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies the correct default classes", () => {
    const { getByTestId } = render(<Input data-testid="input" />);
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass(
      "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    );
  });

  it("applies additional classes when a className prop is provided", () => {
    const { getByTestId } = render(
      <Input data-testid="input" className="text-red-500" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveClass("text-red-500");
  });

  it("applies the correct type attribute when a type prop is provided", () => {
    const { getByTestId } = render(
      <Input data-testid="input" type="password" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("passes through additional props to the input element", () => {
    const { getByTestId } = render(
      <Input data-testid="input" name="username" />
    );
    const inputElement = getByTestId("input");
    expect(inputElement).toHaveAttribute("name", "username");
  });
});
